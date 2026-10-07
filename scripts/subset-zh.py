# Subsets Alibaba PuHuiTi 3.0 to the Chinese characters each site actually uses, so pages stay small.
# Writes public/fonts/puhuiti-<site>-<weight>.woff2 (commit them). Rerun after changing any Chinese text.
# The full fonts (8 MB each) are not in the repo: point PUHUITI_DIR at them (download: alibabafonts.com).
# Needs: pip install fonttools brotli
import os, pathlib, re
from fontTools import subset

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIR = pathlib.Path(os.environ.get('PUHUITI_DIR', ROOT.parent / 'assets' / 'fonts' / 'puhuiti'))
FACES = {400: 'AlibabaPuHuiTi-3-55-Regular.otf', 500: 'AlibabaPuHuiTi-3-65-Medium.otf'}
CJK = re.compile(r'[　-〿㐀-䶿一-鿿＀-￯‘’“”·—…]')
ASCII = ''.join(chr(c) for c in range(0x20, 0x7f)) + '¥'

for site in ('en', 'zh'):
    used = set()
    for folder in ('shared', site):
        for f in (ROOT / 'src' / folder).rglob('*'):
            if f.suffix in ('.astro', '.ts', '.md', '.css'):
                used |= set(CJK.findall(f.read_text(encoding='utf-8')))
    text = ''.join(sorted(used)) + (ASCII if site == 'zh' else '')  # zh pages set Latin in PuHuiTi too
    for weight, name in FACES.items():
        opts = subset.Options()
        opts.flavor = 'woff2'
        opts.desubroutinize = True
        font = subset.load_font(str(DIR / name), opts)
        sub = subset.Subsetter(opts)
        sub.populate(text=text)
        sub.subset(font)
        out = ROOT / 'public' / 'fonts' / f'puhuiti-{site}-{weight}.woff2'
        subset.save_font(font, str(out), opts)
        print(f'{out.name}: {len(used)} CJK chars, {out.stat().st_size // 1024} KB')
