// Byte-range responses for /media/*. Workers static assets answer Range with a full 200, and iOS Safari will not
// play <video> without 206 responses. The files are small (< 200 KB), so the slice happens in memory.
// run_worker_first covers /media/*, so _headers no longer applies there: the headers below replace it.
// Check: node worker/ranged.test.mjs
export async function ranged(request, asset) {
  const headers = new Headers(asset.headers);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'public, max-age=86400');
  headers.set('X-Content-Type-Options', 'nosniff');
  const m = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get('Range') || '');
  if (request.method !== 'GET' || !asset.ok || asset.status !== 200 || !m || (m[1] === '' && m[2] === '')) {
    return new Response(asset.body, { status: asset.status, headers });
  }
  const buf = await asset.arrayBuffer();
  const size = buf.byteLength;
  const start = m[1] === '' ? Math.max(0, size - Number(m[2])) : Number(m[1]);
  const end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1);
  if (start > end || start >= size) {
    return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}`, 'Accept-Ranges': 'bytes' } });
  }
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  return new Response(buf.slice(start, end + 1), { status: 206, headers });
}
