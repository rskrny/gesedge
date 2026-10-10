# Renders share/link-preview images, tab icons, and the square logo from brand/logo SVGs.
# Run: python scripts/brand-assets.py .   (needs playwright + Pillow; writes public/ and brand/logo/)
import re, sys, pathlib
from playwright.sync_api import sync_playwright
from PIL import Image
R = pathlib.Path(sys.argv[1]); L = R/'brand/logo'; OUT = R/'public'
GROUND, TIMBER, INK = '#140e0b', '#1b1411', '#f5f2f1'
import base64
font = 'data:font/woff2;base64,' + base64.b64encode((R/'node_modules/@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2').read_bytes()).decode()

def inner(name):  # svg body + viewBox, so we can recolour/compose
    s = (L/name).read_text(encoding='utf-8')
    vb = re.search(r'viewBox="([^"]+)"', s).group(1)
    return vb, re.sub(r'^<svg[^>]*>|</svg>$', '', s.strip())

# stacked lockup: unfilled paths with data-color -> brand fills
vb, body = inner('master-lockup-stacked.svg')
body = (body.replace('data-color="brand-2"', 'fill="#e4ddd2"').replace('data-color="brand-1"', 'fill="#87b6af"')
            .replace('data-color="text"', f'fill="{INK}"'))
stacked = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">{body}</svg>'

# colour mark only (socket + tail, no device tile) from symbol-only.svg
_, sym = inner('symbol-only.svg')
mark = ''.join(re.findall(r'<path id="(?:socket-block|tail-piece)"[^>]*/>', sym))
mark_svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 84 84">{mark}</svg>'

page_css = f"@font-face{{font-family:U;src:url({font});font-weight:100 900}}*{{margin:0;padding:0;box-sizing:border-box}}body{{background:{GROUND}}}"
def shot(p, html, w, h, out, transparent=False):
    p.set_viewport_size({'width': w, 'height': h})
    p.set_content(f'<style>{page_css}</style>{html}'); p.evaluate('document.fonts.ready'); p.wait_for_timeout(300)
    p.screenshot(path=str(OUT/out), omit_background=transparent)

def square_mark(size, pad):  # colour mark on full-bleed timber square (iOS/WeChat/Google crop their own corners)
    m = size - 2*pad
    return f'<div style="width:{size}px;height:{size}px;background:{TIMBER};display:grid;place-items:center">' \
           f'<div style="width:{m}px;height:{m}px">{mark_svg.replace("<svg ", "<svg width=100% height=100% ")}</div></div>'

with sync_playwright() as pw:
    b = pw.chromium.launch(); p = b.new_page(device_scale_factor=1)
    # PartnerStack / avatar: stacked lockup, circle-crop safe (ink inside a 470px radius)
    s = stacked.replace('<svg ', '<svg height="700" ')
    shot(p, f'<div style="width:1024px;height:1024px;background:{TIMBER};display:grid;place-items:center">{s}</div>', 1024, 1024, '../brand/logo/ges-logo-square-1024.png')
    shot(p, square_mark(512, 96), 512, 512, 'share.png')
    shot(p, square_mark(180, 34), 180, 180, 'apple-touch-icon.png')
    # OG en: horizontal lockup + hero line. No labels, no coordinates (DESIGN §11).
    _, od = inner('on-dark-background.svg'); vbo = re.search(r'data-ink="([^"]+)"', (L/'on-dark-background.svg').read_text()).group(1)
    x0, y0, x1, y1 = map(float, vbo.split()); od = re.sub(r'<rect id="ground"[^>]*/>', '', od)
    lock = f'<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="{x0} {y0} {x1-x0} {y1-y0}">{od}</svg>'
    shot(p, f'<div style="width:1200px;height:630px;background:{TIMBER};padding:72px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start">'
            f'{lock}<p style="font:500 58px/1.18 U;color:{INK};max-width:1000px;margin-bottom:24px">We build AI systems for US companies and English websites for Chinese factories.</p></div>', 1200, 630, 'og-en.png')
    # OG zh: the Chinese lockup alone, centred
    zh = (L/'zh/lockup-chengdu-huanqiao-full-color-dark.svg').read_text(encoding='utf-8').replace('<svg ', '<svg width="760" ', 1)
    shot(p, f'<div style="width:1200px;height:630px;background:{TIMBER};display:grid;place-items:center">{zh}</div>', 1200, 630, 'og-zh.png')
    b.close()

# favicon.ico from the pixel-hinted brand PNGs (not a resample of one size)
ims = [Image.open(L/f'favicon-{n}.png').convert('RGBA') for n in (48, 32, 16)]
ims[0].save(OUT/'favicon.ico', sizes=[(48, 48), (32, 32), (16, 16)], append_images=ims[1:])
ico = Image.open(OUT/'favicon.ico'); print('ico sizes', ico.info.get('sizes'))
for f in ('share.png', 'apple-touch-icon.png', 'og-en.png', 'og-zh.png', 'favicon.ico', '../brand/logo/ges-logo-square-1024.png'): print(f, Image.open(OUT/f).size)
