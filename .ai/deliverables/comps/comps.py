# Three homepage design comps (first screen + services) for Ryan to rate. Gated copy only.
import re, importlib.util, pathlib
G = pathlib.Path(r"C:/Users/rskrn/Desktop/Global Edge Strategies Chengdu Huanqiao/gesedge")
spec = importlib.util.spec_from_file_location('joint', 'joint.py'); joint = importlib.util.module_from_spec(spec); spec.loader.exec_module(joint)

def logo(path, h):
    raw = (G / path).read_text(encoding='utf-8')
    x0, y0, x1, y1 = map(float, re.search(r'data-ink="([^"]+)"', raw).group(1).split())
    raw = re.sub(r'<\?xml[^>]*>', '', raw)
    raw = re.sub(r'viewBox="[^"]*"', f'viewBox="{x0} {y0} {x1-x0} {y1-y0}"', raw, count=1)
    return raw.replace('<svg ', f'<svg height="{h}" width="{round(h*(x1-x0)/(y1-y0))}" aria-label="Global Edge Strategies" ', 1)
GES = logo('brand/logo/full-color-dark.svg', 26)
SYMBOL = logo('brand/logo/symbol-only.svg', 20)

H1 = "We build AI systems for US companies and English websites for Chinese factories."
SUB = "Global Edge Strategies is a Wyoming company, and its sister company <span lang='zh-CN'>成都寰桥</span> is in Chengdu. Ryan Kearney runs both."
OFFERS = [
    ("01", "AI operations pilot", "For teams that spend hours a day sorting email, re-keying orders, or chasing status updates. We start with a paid review of one workflow, build one system for it, and run that system beside your team until its output has been checked.", "Review $2,500, credited to the build", "Builds from $15,000"),
    ("02", "Owner’s dashboard", "One private page that shows what is happening across your business, rebuilt every night from the systems you already use.", "Setup from $3,000", "then from $750 a month"),
    ("03", "Your person in China", "For US companies that buy from Chinese suppliers and need someone on the ground in China. Desk checks, supplier visits, and a written memo to help you decide. Advisory only. We never handle goods or money.", "Desk check $750", "Supplier visit $1,500"),
]
NAV = ['Services', 'Work', 'About', 'Contact']

BASE = """
@font-face{font-family:Unbounded;src:url(fonts/unbounded.woff2) format('woff2');font-weight:200 900}
@font-face{font-family:'Plex Sans';src:url(fonts/plex-sans-300.woff2) format('woff2');font-weight:300}
@font-face{font-family:'Plex Sans';src:url(fonts/plex-sans-400.woff2) format('woff2');font-weight:400}
@font-face{font-family:'Plex Sans';src:url(fonts/plex-sans-500.woff2) format('woff2');font-weight:500}
@font-face{font-family:'Plex Sans';src:url(fonts/plex-sans-600.woff2) format('woff2');font-weight:600}
@font-face{font-family:'Plex Mono';src:url(fonts/plex-mono-400.woff2) format('woff2');font-weight:400}
@font-face{font-family:'Plex Mono';src:url(fonts/plex-mono-500.woff2) format('woff2');font-weight:500}
@font-face{font-family:PuHuiTi;src:url(fonts/puhuiti-en-400.woff2) format('woff2');font-weight:400}
@font-face{font-family:PuHuiTi;src:url(fonts/puhuiti-en-500.woff2) format('woff2');font-weight:500}
:root{--ground:#140e0b;--timber:#1b1411;--panel:#221a16;--line:#3a302a;--ink:#f5f2f1;--muted:#b9b0a4;--celadon:#87b6af;--ash:#e4ddd2;
--display:Unbounded,PuHuiTi,sans-serif;--sans:'Plex Sans',PuHuiTi,system-ui,sans-serif;--mono:'Plex Mono',PuHuiTi,ui-monospace,monospace}
*{box-sizing:border-box}html{-webkit-font-smoothing:antialiased}
body{margin:0;background:var(--ground);color:var(--ink);font:400 18px/1.6 var(--sans)}
a{color:inherit;text-decoration:none}
.lab{font:500 11px/1.4 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.btn{display:inline-flex;align-items:center;gap:10px;padding:14px 22px;border-radius:2px;font:500 15px/1 var(--sans);background:var(--celadon);color:var(--ground)}
.btn.ghost{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1px var(--line)}
.wrap{max-width:1440px;margin:0 auto;padding:0 56px}
.disp{font-family:var(--display);font-weight:500;letter-spacing:-.015em}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}
"""

def page(title, css, body):
    return f"<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>{title}</title><style>{BASE}{css}</style></head><body>{body}</body></html>"

def nav(extra=''):
    links = ''.join(f"<a href='#'>{n}</a>" for n in NAV)
    return f"<header class='top {extra}'><a href='#' class='brand'>{GES}</a><nav>{links}</nav><a class='btn' href='#'>Book a call</a></header>"

NAVCSS = ".top{display:flex;align-items:center;gap:40px;padding:26px 56px;position:relative;z-index:2}.top nav{margin-left:auto;display:flex;gap:30px;font:400 15px var(--sans);color:var(--muted)}.top nav a:hover{color:var(--ink)}.top .btn{padding:11px 18px;font-size:14px}"

# ---------- A · The joint ----------
a_css = NAVCSS + """
.hero{position:relative;height:min(100vh,900px);display:grid;grid-template-rows:auto 1fr auto;overflow:hidden}
.hero .stage{display:grid;grid-template-columns:1fr 1fr;align-items:center;padding:0 56px;gap:40px}
.hero h1{font-size:46px;line-height:1.12;margin:0 0 28px;max-width:640px}
.hero p.lab{font-size:11px;margin:0 0 28px}
.hero p{color:var(--muted);max-width:520px;margin:0 0 36px;font-size:19px}
.ctas{display:flex;gap:12px}
.obj{justify-self:center;width:min(400px,100%);margin-top:24px}
.obj svg{width:100%;height:auto;overflow:visible}
.obj .socket{animation:seat 5.5s cubic-bezier(.65,0,.35,1) infinite}
@keyframes seat{0%,18%{transform:translateY(0)}45%,62%{transform:translateY(58px)}88%,100%{transform:translateY(0)}}
.hud{display:flex;justify-content:space-between;padding:22px 56px 30px;border-top:1px solid var(--line)}
.glow{position:absolute;right:-10%;top:10%;width:70%;height:80%;background:radial-gradient(closest-side,rgba(135,182,175,.10),transparent);pointer-events:none}
.svc{padding:120px 0 140px;border-top:1px solid var(--line)}
.svc .head{display:grid;grid-template-columns:4fr 8fr;gap:40px;margin-bottom:56px}
.svc h2{font-size:34px;line-height:1.15;margin:0}
.row{display:grid;grid-template-columns:120px 4fr 6fr 3fr;gap:40px;padding:40px 0;border-top:1px solid var(--line);align-items:baseline}
.row:last-child{border-bottom:1px solid var(--line)}
.row .n{font:300 44px/1 var(--display);color:var(--celadon)}
.row h3{font:500 24px/1.25 var(--display);margin:0}
.row p{margin:0;color:var(--muted);font-size:17px}
.row .price{font:500 14px/1.6 var(--mono);color:var(--ink);text-align:right}
.row .price span{display:block;color:var(--muted)}
"""
rows = ''.join(f"<div class='row'><span class='n'>{n}</span><h3>{t}</h3><p>{d}</p><div class='price'>{p1}<span>{p2}</span></div></div>" for n,t,d,p1,p2 in OFFERS)
a_body = f"""
<section class='hero'>{nav()}<div class='glow'></div>
<div class='stage'><div><p class='lab' style='margin:0 0 28px;color:var(--celadon)'>AI systems · China advisory · Since 2024</p>
<h1 class='disp'>{H1}</h1><p>{SUB}</p><div class='ctas'><a class='btn' href='#'>Book a call</a><a class='btn ghost' href='#'>See the work</a></div></div>
<div class='obj'>{joint.svg()}</div></div>
<div class='hud lab'><span>104°03′W · Wyoming</span><span>Two companies, one founder</span><span>Chengdu · 104°04′E</span></div></section>
<section class='svc'><div class='wrap'><div class='head'><p class='lab'>What we do for US businesses</p><h2 class='disp'>Three services, each with a fixed price agreed before work starts.</h2></div>{rows}</div></section>
"""

# ---------- B · Real work ----------
b_css = NAVCSS + """
.hero{height:min(100vh,900px);display:grid;grid-template-rows:auto 1fr;overflow:hidden;position:relative}
.hero p.lab{font-size:11px;margin:0 0 26px}
.stage{display:grid;grid-template-columns:5fr 7fr;align-items:center;gap:24px;padding:0 0 0 56px}
.hero h1{font-size:44px;line-height:1.12;margin:0 0 26px}
.hero p{color:var(--muted);margin:0 0 34px;max-width:480px;font-size:19px}
.ctas{display:flex;gap:12px}
.shot{position:relative;perspective:1600px;padding:40px 0 40px 20px}
.shot img{width:108%;display:block;border-radius:6px;transform:rotateY(-12deg) rotateX(4deg);transform-origin:left center;box-shadow:0 40px 120px rgba(0,0,0,.55),0 0 0 1px var(--line)}
.tag{display:block;margin-top:34px;font:500 11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.tag b{color:var(--celadon);font-weight:500}
.svc{padding:110px 0 140px;background:var(--timber)}
.svc .grid{display:grid;grid-template-columns:repeat(12,1fr);gap:24px}
.svc h2{grid-column:1/6;font-size:34px;line-height:1.15;margin:0}
.svc .intro{grid-column:7/13;color:var(--muted);margin:0}
.list{margin-top:72px}
.item{display:grid;grid-template-columns:repeat(12,1fr);gap:24px;padding:36px 0;border-top:1px solid var(--line)}
.item .n{grid-column:1/2;font:500 13px var(--mono);color:var(--celadon);padding-top:8px}
.item h3{grid-column:2/6;font:500 26px/1.2 var(--display);margin:0}
.item p{grid-column:6/11;margin:0;color:var(--muted);font-size:17px}
.item .price{grid-column:11/13;font:500 14px/1.6 var(--mono);text-align:right}
.item .price span{display:block;color:var(--muted)}
"""
items = ''.join(f"<div class='item'><span class='n'>{n}</span><h3>{t}</h3><p>{d}</p><div class='price'>{p1}<span>{p2}</span></div></div>" for n,t,d,p1,p2 in OFFERS)
b_body = f"""
<section class='hero'>{nav()}
<div class='stage'><div><p class='lab' style='margin:0 0 26px'>{SYMBOL.replace('<svg','<svg style=\"display:inline;vertical-align:-4px;margin-right:10px\"',1)}Based in Chengdu · 104°04′E</p>
<h1 class='disp'>{H1}</h1><p>{SUB}</p><div class='ctas'><a class='btn' href='#'>Book a call</a><a class='btn ghost' href='#'>See the work</a></div></div>
<div class='shot'><img src='img/email-triage.webp' alt='Executive dashboard of a live email triage system, client data blurred'><span class='tag'><b>Live since July 2026</b> · email triage · client data blurred</span></div></div></section>
<section class='svc'><div class='wrap'><div class='grid'><h2 class='disp'>What we do for US businesses</h2><p class='intro'>Three services for US businesses. Each has a fixed price, agreed before work starts. If the scope changes, we agree the new price first. Prices are in US dollars.</p></div>
<div class='list'>{items}</div></div></section>
"""

# ---------- C · Meridians ----------
c_css = NAVCSS + """
.hero{height:min(100vh,900px);display:grid;grid-template-rows:auto 1fr auto;position:relative;overflow:hidden}
.meridian{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:48px;padding:0 56px}
.coord{font:200 min(7.4vw,108px)/0.9 var(--display);letter-spacing:-.04em;color:var(--ink)}
.coord.e{text-align:right;color:var(--celadon)}
.coord small{display:block;font:500 12px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-top:18px}
.coord.e small{text-align:right}
.mark{width:150px}.mark svg{width:100%;height:auto}
.line{position:absolute;left:56px;right:56px;top:50%;height:1px;background:linear-gradient(90deg,var(--line),var(--celadon) 50%,var(--line));opacity:.6;z-index:-1}
.under{display:grid;grid-template-columns:7fr 5fr;gap:48px;padding:0 56px 56px;align-items:end}
.under h1{font-size:30px;line-height:1.25;margin:0;max-width:760px}
.under .r p{margin:0 0 24px;color:var(--muted);font-size:17px}
.ctas{display:flex;gap:12px}
.svc{background:var(--ash);color:#1b1411;padding:120px 0 140px}
.svc .lab{color:#6c665e}
.svc h2{font-size:40px;line-height:1.1;margin:18px 0 64px;max-width:820px}
.crow{display:grid;grid-template-columns:90px 5fr 5fr 3fr;gap:40px;padding:36px 0;border-top:1px solid #cec7ba;align-items:baseline}
.crow:first-child{border-top:2px solid #1b1411}
.crow .n{font:500 13px var(--mono);color:#4c6e69}
.crow h3{font:500 26px/1.2 var(--display);margin:0}
.crow p{margin:0;color:#483f3b;font-size:16px}
.crow .price{text-align:right}
.crow .price b{display:block;font:500 30px/1.1 var(--display);letter-spacing:-.02em}
.crow .price span{display:block;font:500 13px/1.6 var(--mono);color:#6c665e;margin-top:6px}
"""
import re as _re
def _amt(p): m=_re.search(r'\$\d{1,3}(?:,\d{3})*', p); return (m.group(0), p.replace(m.group(0),'').replace(' ,', ',').strip(' ,')) if m else (p,'')
cols = ''.join(f"<div class='crow'><span class='n'>{n}</span><h3>{t}</h3><p>{d}</p><div class='price'><b>{_amt(p1)[0]}</b><span>{_amt(p1)[1]} · {p2}</span></div></div>" for n,t,d,p1,p2 in OFFERS)
c_body = f"""
<section class='hero'>{nav()}
<div class='meridian'><div class='coord'>104°03′W<small>Wyoming · Global Edge Strategies LLC</small></div><div class='mark'>{logo('brand/logo/symbol-only.svg',150)}</div><div class='coord e'>104°04′E<small><span lang='zh-CN'>成都寰桥</span> · Chengdu</small></div></div>
<div class='under'><h1 class='disp'>{H1}</h1><div class='r'><p>{SUB}</p><div class='ctas'><a class='btn' href='#'>Book a call</a><a class='btn ghost' href='#'>See the work</a></div></div></div></section>
<section class='svc'><div class='wrap'><p class='lab'>What we do for US businesses</p><h2 class='disp'>Three services, each with a fixed price agreed before work starts.</h2><div>{cols}</div></div></section>
"""

for name, title, css, body in [('a', 'A · The joint', a_css, a_body), ('b', 'B · Real work', b_css, b_body), ('c', 'C · Meridians', c_css, c_body)]:
    pathlib.Path(f'comp-{name}.html').write_text(page(f'GES comp {title}', css, body), encoding='utf-8')
print('ok')
