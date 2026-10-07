# Exploded isometric dovetail joint from the approved mark's geometry (brand/logo/full-color-dark.svg).
import math
SOCKET = [(-182.033,-12.5),(-57.033,-12.5),(-57.033,62.277),(-96.539,62.277),(-80.17,14.658),(-158.896,14.658),(-142.527,62.277),(-182.033,62.277)]
TAIL = [(-182.033,112.5),(-182.033,67.485),(-135.229,67.485),(-151.598,19.866),(-87.468,19.866),(-103.837,67.485),(-57.033,67.485),(-57.033,112.5)]
D = 56                     # extrusion depth
A = math.radians(30)
DX, DY = math.cos(A), -math.sin(A)   # depth axis in screen space (up-right)
def shade(hexc, f):
    r,g,b = (int(hexc[i:i+2],16) for i in (1,3,5))
    c = lambda v: max(0,min(255,round(v*f if f<1 else v+(255-v)*(f-1))))
    return f"#{c(r):02x}{c(g):02x}{c(b):02x}"
def area(poly):
    return sum(x1*y2-x2*y1 for (x1,y1),(x2,y2) in zip(poly, poly[1:]+poly[:1]))/2
def hull(pts):
    pts = sorted(set(pts))
    cross = lambda o,a,b: (a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0])
    lo, up = [], []
    for p in pts:
        while len(lo) >= 2 and cross(lo[-2], lo[-1], p) <= 0: lo.pop()
        lo.append(p)
    for p in reversed(pts):
        while len(up) >= 2 and cross(up[-2], up[-1], p) <= 0: up.pop()
        up.append(p)
    return set(lo[:-1] + up[:-1])
def on_hull(a, b, poly):
    h = hull(poly)
    return a in h and b in h
def piece(poly, colour, dy=0, cls=''):
    poly = [(x, y+dy) for x,y in poly]
    if area(poly) < 0: poly = poly[::-1]          # make orientation consistent (clockwise in screen coords)
    quads = []
    for (x1,y1),(x2,y2) in zip(poly, poly[1:]+poly[:1]):
        ex, ey = x2-x1, y2-y1
        nx, ny = ey, -ex                          # outward normal for this orientation
        if nx*DX + ny*DY <= 0: continue           # facing away from the viewer
        far = ((x1+x2)/2)*DX + ((y1+y2)/2)*DY
        top = ny < -abs(nx)*0.35                  # mostly upward-facing
        col = shade(colour, 1.35) if top else shade(colour, 0.72)
        pts = [(x1,y1),(x2,y2),(x2+D*DX,y2+D*DY),(x1+D*DX,y1+D*DY)]
        quads.append((on_hull((x1,y1),(x2,y2),poly), far, col, pts))
    quads.sort(key=lambda q: (q[0], -q[1]))       # concave (inner) faces first, then outer; far before near
    fmt = lambda pts: ' '.join(f'{x:.1f},{y:.1f}' for x,y in pts)
    out = [f'<g class="{cls}">']
    out += [f'<polygon points="{fmt(p)}" fill="{c}"/>' for _,_,c,p in quads]
    out.append(f'<polygon points="{fmt(poly)}" fill="{colour}"/>')
    out.append('</g>')
    return '\n'.join(out)
def svg(gap=-118, cls=''):
    socket = piece(SOCKET, '#e4ddd2', dy=gap, cls='socket')
    tail = piece(TAIL, '#87b6af', cls='tail')
    xs = [-190, -50 + D*DX + 10]; ys = [-12.5+gap + D*DY - 10, 122]
    vb = f'{xs[0]} {ys[0]} {xs[1]-xs[0]} {ys[1]-ys[0]}'
    return f'<svg class="{cls}" viewBox="{vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A dovetail joint: two pieces about to lock together">\n<g stroke="#1b1411" stroke-width="0.9" stroke-linejoin="round">\n{tail}\n{socket}\n</g></svg>'
if __name__ == '__main__':
    open('C:/tmp/ges-comps/joint.svg','w').write(svg())
    print('ok')
