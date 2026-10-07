// Worker for both sites. Static pages are served by the assets binding without running this code
// (run_worker_first covers /api/* only). POST /api/contact stores the message in Supabase and, when
// RESEND_API_KEY is set, emails it to Ryan. Works without JavaScript: the form posts here and gets a 303.
// ponytail: honeypot + same-origin + size limits only. Add Turnstile or a rate-limit binding if spam shows up.

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

async function mail(env, row, zh) {
  if (!env.RESEND_API_KEY) return false;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.MAIL_FROM,
        to: 'ryan@gesedge.com',
        ...(zh ? {} : { reply_to: row.email }),
        subject: `${zh ? '[寰桥] ' : ''}Website message from ${row.name}${row.company ? ` (${row.company})` : ''}`,
        text: `Name: ${row.name}\n${zh ? 'WeChat/phone' : 'Email'}: ${row.email}\nCompany: ${row.company ?? '-'}\n\n${row.message}`,
      }),
    });
    return res.ok;
  } catch { return false; }
}
