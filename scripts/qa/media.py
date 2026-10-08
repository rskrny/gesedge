# Real-Chrome checks of the hero video on a built site or a live URL:
#   python scripts/qa/media.py dist/en          (serves the folder locally)
#   python scripts/qa/media.py https://gesedge.com
# Prints: which source each viewport plays, that it advances, reduced motion (still shown, no video fetched),
# the pause button, and that the H.264 fallbacks decode. Needs Playwright + installed Chrome.
import sys, functools, http.server, socketserver, threading
from playwright.sync_api import sync_playwright

target = sys.argv[1] if len(sys.argv) > 1 else 'dist/en'
srv = None
if target.startswith('http'):
    base = target.rstrip('/')
else:
    H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=target); H.log_message = lambda *a: None
    srv = socketserver.TCPServer(('127.0.0.1', 0), H); base = f'http://127.0.0.1:{srv.server_address[1]}'
    threading.Thread(target=srv.serve_forever, daemon=True).start()
home = base + ('/' if target.startswith('http') else '/index.html')
VID = "document.querySelector('.joint video')"
with sync_playwright() as p:
    b = p.chromium.launch(channel='chrome')
    for w in (1440, 390):
        pg = b.new_page(viewport={'width': w, 'height': 900})
        pg.goto(home, wait_until='networkidle'); t0 = pg.evaluate(f'{VID}.currentTime'); pg.wait_for_timeout(2000)
        print(w, 'plays', pg.evaluate(f"{VID}.currentSrc.split('/').pop()"), 'advancing', pg.evaluate(f'{VID}.currentTime') > t0)
        pg.close()
    ctx = b.new_context(viewport={'width': 1440, 'height': 900}, reduced_motion='reduce'); pg = ctx.new_page(); media = []
    pg.on('request', lambda r: media.append(r.url.split('/')[-1]) if '/media/' in r.url else None)
    pg.goto(home, wait_until='networkidle'); pg.wait_for_timeout(800)
    print('reduced motion: fetched', media, pg.evaluate("(()=>{const i=document.querySelector('.joint .still');return {still: getComputedStyle(i).display, loaded: i.complete && i.naturalWidth > 0, pauseHidden: document.querySelector('.joint .toggle').hidden}})()"))
    ctx.close(); pg = b.new_page(viewport={'width': 1440, 'height': 900}); pg.goto(home, wait_until='networkidle')
    btn = pg.locator('.joint .toggle'); btn.click(); pg.wait_for_timeout(200)
    print('pause button: paused', pg.evaluate(f'{VID}.paused'), '|', btn.get_attribute('aria-label'))
    for f in ('joint-800.mp4', 'joint-520.mp4'):
        print(f, pg.evaluate(f"new Promise(r=>{{const v=document.createElement('video');v.muted=true;v.src='/media/{f}';v.oncanplay=()=>r('decodes');v.onerror=()=>r('ERROR')}})"))
    b.close()
if srv: srv.shutdown()
