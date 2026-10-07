// node worker/ranged.test.mjs  — fails loudly if byte-range handling breaks.
import assert from 'node:assert/strict';
import { ranged } from './ranged.js';

const body = new Uint8Array([...Array(100).keys()]);
const asset = () => new Response(body, { status: 200, headers: { 'Content-Type': 'video/mp4' } });
const get = (range, method = 'GET') => new Request('https://x/media/a.mp4', { method, headers: range ? { Range: range } : {} });
const bytes = async (r) => [...new Uint8Array(await r.arrayBuffer())];

let r = await ranged(get('bytes=0-9'), asset());
assert.equal(r.status, 206);
assert.equal(r.headers.get('Content-Range'), 'bytes 0-9/100');
assert.deepEqual(await bytes(r), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

r = await ranged(get('bytes=0-1'), asset());           // Safari's first probe
assert.equal(r.status, 206);
assert.equal(r.headers.get('Content-Length'), '2');

r = await ranged(get('bytes=95-'), asset());           // open-ended
assert.deepEqual(await bytes(r), [95, 96, 97, 98, 99]);

r = await ranged(get('bytes=-3'), asset());            // suffix
assert.equal(r.headers.get('Content-Range'), 'bytes 97-99/100');

r = await ranged(get('bytes=90-500'), asset());        // end past the file is clamped
assert.equal(r.headers.get('Content-Range'), 'bytes 90-99/100');

r = await ranged(get('bytes=200-300'), asset());       // start past the file
assert.equal(r.status, 416);
assert.equal(r.headers.get('Content-Range'), 'bytes */100');

r = await ranged(get(null), asset());                  // no Range: whole file, ranges advertised
assert.equal(r.status, 200);
assert.equal(r.headers.get('Accept-Ranges'), 'bytes');
assert.equal((await bytes(r)).length, 100);

r = await ranged(get('bytes=0-9'), new Response(null, { status: 304 }));   // conditional hit passes through
assert.equal(r.status, 304);

r = await ranged(get('bytes=0-9', 'HEAD'), asset());   // HEAD: no slicing
assert.equal(r.status, 200);

console.log('ranged: all checks pass');
