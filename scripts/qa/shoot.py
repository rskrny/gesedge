# Full-page screenshots of a built site (Playwright + Chromium, real 390 px viewport, reduced motion).
#   python scripts/qa/shoot.py dist/en "index.html,services/index.html" 1440,390   (set PFX to prefix file names)
# Writes to C:/tmp/ges-shots. Headless full-page captures show only the hero video's still/poster and can miss
# lazy images below the fold; check those in a scrolled viewport (scripts/qa/media.py).
import os, sys, threading, functools, http.server, socketserver
OUT = 'C:/tmp/ges-shots'
os.makedirs(OUT, exist_ok=True)
from playwright.sync_api import sync_playwright
root, pages = sys.argv[1], sys.argv[2].split(',')
widths = [int(w) for w in (sys.argv[3] if len(sys.argv) > 3 else '1440,390').split(',')]
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=root)
H.log_message = lambda *a: None
srv = socketserver.TCPServer(('127.0.0.1', 0), H); port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
with sync_playwright() as p:
    b = p.chromium.launch()
    for w in widths:
        ctx = b.new_context(viewport={'width': w, 'height': 900}, device_scale_factor=1, reduced_motion='reduce')
        pg = ctx.new_page()
        for path in pages:
            pg.goto(f'http://127.0.0.1:{port}/{path}', wait_until='networkidle')
            name = os.environ.get('PFX', '') + (path.strip('/').replace('/', '_').replace('_index.html', '').replace('index.html', 'home') or 'home') + f'-{w}.png'
            pg.screenshot(path=f'{OUT}/{name}', full_page=True)
            ow = pg.evaluate('document.documentElement.scrollWidth')
            print(name, 'overflow' if ow > w else 'ok', ow)
        ctx.close()
    b.close()
srv.shutdown()
