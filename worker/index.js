// Worker for both sites. Static pages are served by the assets binding without running this code
// (run_worker_first covers /api/* only). POST /api/contact stores the message in Supabase and emails it to
// Ryan through Purelymail (his existing mail host) as website@gesedge.com. No third-party mail service.
// Works without JavaScript: the form posts here and gets a 303.
// ponytail: honeypot + same-origin + size limits only. Add Turnstile or a rate-limit binding if spam shows up.
import { connect } from 'cloudflare:sockets';

const LIMITS = { name: 100, email: 200, company: 200, contact: 100, site: 300, message: 4000 };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact/' || url.pathname === '/api/contact') return contact(request, env, url);
    return env.ASSETS.fetch(request);
  },
};

async function contact(request, env, url) {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
  const origin = request.headers.get('Origin');
  if (origin && origin !== url.origin) return new Response('Forbidden', { status: 403 });
  if (Number(request.headers.get('Content-Length') || 0) > 20000) return new Response('Too large', { status: 413 });

  const go = (path) => new Response(null, { status: 303, headers: { Location: new URL(path, url).href, 'Cache-Control': 'no-store' } });
  let form;
  try { form = await request.formData(); } catch { return go('/contact/error/'); }
  const get = (k) => String(form.get(k) ?? '').trim().slice(0, LIMITS[k] ?? 200);

  if (get('website2')) return go('/contact/sent/'); // honeypot: bots fill every field

  const zh = env.SITE === 'zh';
  const row = zh
    ? { name: get('name'), email: get('contact'), company: get('company') || null, service: 'huanqiao',
        message: `${get('message')}\n\nWebsite/product: ${get('site')}\nCross-border consent: ${form.get('consent') ? 'yes' : 'no'}` }
    : { name: get('name'), email: get('email'), company: get('company') || null, service: 'gesedge', message: get('message') };

  const valid = row.name && row.message && (zh ? row.email && form.get('consent') : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email));
  if (!valid) return go('/contact/error/');

  const [stored, mailed] = await Promise.all([store(env, row), mail(env, row, zh)]);
  return go(stored || mailed ? '/contact/sent/' : '/contact/error/');
}

async function store(env, row) {
  try {
    const res = await fetch(`${env.SUPABASE_URL}/rest/v1/ges_contact_submissions`, {
      method: 'POST',
      headers: { apikey: env.SUPABASE_KEY, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify(row),
    });
    return res.ok;
  } catch { return false; }
}

// Plain SMTP over implicit TLS (smtp.purelymail.com:465). The mailbox password is the Worker secret SMTP_PASS
// (`npx wrangler secret put SMTP_PASS -c wrangler.<site>.jsonc`). Returns false on any failure; the row in
// Supabase is the fallback.
async function mail(env, row, zh) {
  if (!env.SMTP_PASS) return false;
  const from = env.MAIL_FROM;
  const to = 'ryan@gesedge.com';
  const enc = new TextEncoder();
  const b64 = (str) => { let bin = ''; for (const b of enc.encode(str)) bin += String.fromCharCode(b); return btoa(bin); };
  const oneLine = (str) => String(str).replace(/[\r\n]+/g, ' ');
  const subject = `${zh ? '[Huanqiao] ' : ''}Website message from ${oneLine(row.name)}${row.company ? ` (${oneLine(row.company)})` : ''}`.slice(0, 150);
  const ascii = /^[ -~]*$/.test(subject); // encode only when needed: needless base64 subjects score as spam
  const body = `Name: ${row.name}\n${zh ? 'WeChat/phone' : 'Email'}: ${row.email}\nCompany: ${row.company ?? '-'}\n\n${row.message}\n`;
  const message = [
    `From: gesedge.com website <${from}>`,
    `To: <${to}>`,
    // Always set Reply-To: without it, Purelymail-forwarded mail to Gmail was silently dropped (tested 2026-10-07).
    `Reply-To: <${zh ? from : row.email}>`, // EN email is validated: no spaces or line breaks
    `Subject: ${ascii ? subject : `=?UTF-8?B?${b64(subject)}?=`}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@gesedge.com>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    b64(body).replace(/.{76}/g, '$&\r\n'),
    '.',
    '',
  ].join('\r\n');

  const socket = connect({ hostname: 'smtp.purelymail.com', port: 465 }, { secureTransport: 'on' });
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  const dec = new TextDecoder();
  let buf = '';
  const done = /(?:^|\r\n)(\d{3})(?: [^\r\n]*)?\r\n$/; // last line of a reply: code + space (or nothing)
  const expect = async (code) => {
    while (!done.test(buf)) {
      const { value, done: closed } = await reader.read();
      if (closed) throw new Error(`closed waiting for ${code}`);
      buf += dec.decode(value, { stream: true });
    }
    const got = buf; buf = '';
    if (got.match(done)[1] !== String(code)) throw new Error(`wanted ${code}, got ${got.trim().slice(0, 120)}`);
    return got.trim();
  };
  const send = (line) => writer.write(enc.encode(line + '\r\n'));
  const session = async () => {
    await expect(220);
    await send('EHLO gesedge.com'); await expect(250);
    await send('AUTH PLAIN ' + b64(`\0${from}\0${env.SMTP_PASS}`)); await expect(235);
    await send(`MAIL FROM:<${from}>`); await expect(250);
    await send(`RCPT TO:<${to}>`); await expect(250);
    await send('DATA'); await expect(354);
    await writer.write(enc.encode(message));
    console.log('smtp accepted:', (await expect(250)).slice(0, 120)); // queue id, no message content
    await send('QUIT');
    return true;
  };
  try {
    return await Promise.race([session(), new Promise((resolve) => setTimeout(() => resolve(false), 10000))]);
  } catch (err) {
    console.log('smtp failed:', err.message); // never logs the password or the message body
    return false;
  } finally {
    socket.close().catch(() => {});
  }
}
