# Animated dovetail logo for the gesedge.com hero (Blender 5.1, Cycles).
# Geometry is the master symbol (brand/logo/master-symbol.svg, 100-unit grid), extruded in depth.
# A dovetail only assembles along its depth, so the tail slides in and out along Y; the gap stays open.
#
#   blender -b -P joint_anim.py -- --out C:/tmp/ges-anim/frames --frames 0,90,140 --res 600 --samples 64
#   blender -b -P joint_anim.py -- --out C:/tmp/ges-anim/frames --anim --res 1000 --samples 128
import bpy, bmesh, math, sys, argparse

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
ap = argparse.ArgumentParser()
ap.add_argument('--out', default='C:/tmp/ges-anim/frames')
ap.add_argument('--frames', default='0,90,140,210')
ap.add_argument('--anim', action='store_true')
ap.add_argument('--range', default='', help='start,end for a partial --anim re-render')
ap.add_argument('--res', type=int, default=600)
ap.add_argument('--samples', type=int, default=64)
ap.add_argument('--save', default='')
ap.add_argument('--exposure', type=float, default=-1.75)
A = ap.parse_args(argv)

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
U = 0.01                 # one logo unit = 1 cm; the mark is 84 cm wide
DEPTH = 56 * U
SOCKET = [(8, 8), (92, 8), (92, 58.25), (65.452, 58.25), (76.452, 26.25), (23.548, 26.25), (34.548, 58.25), (8, 58.25)]
TAIL = [(8, 92), (8, 61.75), (39.452, 61.75), (28.452, 29.75), (71.548, 29.75), (60.548, 61.75), (92, 61.75), (92, 92)]

# timeline (30 fps, 8 s loop; frame 240 == frame 0). Reviewed by Codex + Kimi 2026-10-07:
# face-on logo → orbit to 3/4 → tail slides out, then back in to a held lock → home to face-on.
FPS, END = 30, 240
PITCH, YAW = math.radians(18), math.radians(30)
CAM_KEYS = [(0, 0, 0), (36, 0, 0), (76, PITCH, YAW), (186, PITCH, YAW), (232, 0, 0), (END, 0, 0)]
OUT = -0.64              # metres the tail travels toward the viewer (just past DEPTH, so it clears)
TAIL_KEYS = [(0, 0), (80, 0), (110, OUT), (120, OUT), (170, 0), (END, 0)]
SLIDE_IN = 120           # this key decelerates into the lock


def lin(hexc):
    c = [int(hexc[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    return tuple(v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c) + (1.0,)


def piece(name, pts, mat):
    bm = bmesh.new()
    face = bm.faces.new([bm.verts.new(((x - 50) * U, 0, (50 - y) * U)) for x, y in pts])
    if face.normal.y > 0:                       # front face must look at the camera (-Y)
        face.normal_flip()
    ext = bmesh.ops.extrude_face_region(bm, geom=[face])
    bmesh.ops.translate(bm, vec=(0, DEPTH, 0), verts=[g for g in ext['geom'] if isinstance(g, bmesh.types.BMVert)])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    for p in me.polygons:
        p.use_smooth = True
    ob = bpy.data.objects.new(name, me)
    scene.collection.objects.link(ob)
    bev = ob.modifiers.new('bevel', 'BEVEL')
    bev.width, bev.segments, bev.limit_method, bev.harden_normals = 0.45 * U, 3, 'ANGLE', True
    ob.data.materials.append(mat)
    return ob


def wood(name, hexc, axis, coat, lo, hi):
    """Satin wood in a brand colour. Rings run around `axis`, so long grain shows on two faces and
    end grain on the third, as in a real board. Kept subtle: the face-on frame must read as the flat logo."""
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt, L = m.node_tree, m.node_tree.links
    bsdf = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord')
    mp = nt.nodes.new('ShaderNodeMapping')
    mp.inputs['Location'].default_value = {'X': (0, 0.9, -1.4), 'Z': (-1.3, 0.8, 0)}[axis]
    L.new(tc.outputs['Object'], mp.inputs['Vector'])
    noise = nt.nodes.new('ShaderNodeTexNoise')
    noise.inputs['Scale'].default_value, noise.inputs['Detail'].default_value = 4.0, 6.0
    L.new(mp.outputs['Vector'], noise.inputs['Vector'])
    wave = nt.nodes.new('ShaderNodeTexWave')
    wave.wave_type, wave.rings_direction = 'RINGS', axis
    wave.inputs['Scale'].default_value = 7.0
    wave.inputs['Distortion'].default_value = 3.0
    wave.inputs['Detail'].default_value = 2.0
    L.new(mp.outputs['Vector'], wave.inputs['Vector'])
    grain = nt.nodes.new('ShaderNodeMix')
    grain.data_type = 'FLOAT'
    grain.inputs['Factor'].default_value = 0.35
    L.new(wave.outputs['Fac'], grain.inputs[2])
    L.new(noise.outputs['Fac'], grain.inputs[3])
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = (lo, lo, lo, 1)
    ramp.color_ramp.elements[1].color = (hi, hi, hi, 1)
    L.new(grain.outputs[0], ramp.inputs['Fac'])
    tint = nt.nodes.new('ShaderNodeMix')
    tint.data_type, tint.blend_type = 'RGBA', 'MULTIPLY'
    tint.inputs['Factor'].default_value = 1.0
    tint.inputs[6].default_value = lin(hexc)
    L.new(ramp.outputs['Color'], tint.inputs[7])
    L.new(tint.outputs[2], bsdf.inputs['Base Color'])
    bump = nt.nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value, bump.inputs['Distance'].default_value = 0.05, 0.001
    L.new(grain.outputs[0], bump.inputs['Height'])
    L.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    bsdf.inputs['Roughness'].default_value = 0.48
    bsdf.inputs['Specular IOR Level'].default_value = 0.35
    bsdf.inputs['Coat Weight'].default_value = coat
    bsdf.inputs['Coat Roughness'].default_value = 0.25
    return m


# grain contrast ~6% on ash, ~3% on celadon: it rewards a close look but never competes with the silhouette
socket = piece('socket', SOCKET, wood('ash', '#e4ddd2', 'X', 0.0, 0.95, 1.01))
tail = piece('tail', TAIL, wood('ru-celadon', '#87b6af', 'Z', 0.25, 1.12, 1.155))  # lifted: the lower piece gets less key light


def light(name, kind, loc, energy, size, color=(1, 1, 1)):
    ld = bpy.data.lights.new(name, kind)
    ld.energy, ld.color = energy, color
    if kind == 'AREA':
        ld.shape, ld.size = 'DISK', size
    ob = bpy.data.objects.new(name, ld)
    ob.location = loc
    scene.collection.objects.link(ob)
    tr = ob.constraints.new('TRACK_TO')
    tr.target, tr.track_axis, tr.up_axis = pivot, 'TRACK_NEGATIVE_Z', 'UP_Y'
    return ob


pivot = bpy.data.objects.new('pivot', None)
pivot.location = (0, DEPTH / 2, 0)
scene.collection.objects.link(pivot)
light('key', 'AREA', (-3.3, -4.5, 3.9), 2000, 4.0, (1.0, 0.97, 0.93))
light('fill', 'AREA', (2.6, -3.2, 0.6), 110, 2.6, (0.96, 0.98, 1.0))
light('top', 'AREA', (0.3, 0.2, 3.4), 90, 2.4)
light('rim', 'AREA', (1.2, 4.2, 2.6), 520, 1.2, (0.86, 0.93, 1.0))

world = bpy.data.worlds.new('world')
world.use_nodes = True
world.node_tree.nodes['Background'].inputs['Color'].default_value = (0.004, 0.003, 0.003, 1)
scene.world = world

cam_d = bpy.data.cameras.new('cam')
cam_d.type, cam_d.ortho_scale = 'ORTHO', 1.6
cam = bpy.data.objects.new('cam', cam_d)
cam.location, cam.rotation_euler = (0, -8, 0), (math.radians(90), 0, 0)
cam.parent = pivot
scene.collection.objects.link(cam)
scene.camera = cam


for f, p, y in CAM_KEYS:
    pivot.rotation_euler = (-p, 0, y)
    pivot.keyframe_insert('rotation_euler', frame=f)
for f, y in TAIL_KEYS:
    tail.location = (0, y, 0)
    tail.keyframe_insert('location', frame=f)
    pivot.location = (0, DEPTH / 2 + y / 2, 0)   # camera follows the pair's centre so the tail stays in frame
    pivot.keyframe_insert('location', frame=f)
# the slide in decelerates into the lock (quartic ease-out); the slide out eases both ways
def _fcurves(ob):
    act = ob.animation_data.action
    if hasattr(act, 'fcurves'):
        return list(act.fcurves)
    out = []                                     # Blender 5 layered actions
    for layer in act.layers:
        for strip in layer.strips:
            for bag in strip.channelbags:
                out += list(bag.fcurves)
    return out
for ob in (pivot, tail):
    for fc in _fcurves(ob):
        for k in fc.keyframe_points:
            k.interpolation, k.easing = 'CUBIC', 'EASE_IN_OUT'
            if fc.data_path == 'location' and int(k.co.x) == SLIDE_IN:
                k.interpolation, k.easing = 'QUART', 'EASE_OUT'

r = scene.render
r.engine = 'CYCLES'
r.resolution_x = r.resolution_y = A.res
r.film_transparent = True
r.fps = FPS
r.use_motion_blur = True
r.motion_blur_shutter = 0.5
r.image_settings.file_format, r.image_settings.color_mode = 'PNG', 'RGBA'
scene.view_settings.view_transform, scene.view_settings.look = 'Standard', 'None'
scene.view_settings.exposure = A.exposure   # calibrated so the face-on front faces land on the brand hex
c = scene.cycles
c.samples, c.adaptive_threshold, c.use_denoising = A.samples, 0.01, True
c.denoiser = 'OPENIMAGEDENOISE'
c.max_bounces, c.glossy_bounces, c.transmission_bounces = 6, 3, 0
try:
    prefs = bpy.context.preferences.addons['cycles'].preferences
    for kind in ('OPTIX', 'CUDA'):
        try:
            prefs.compute_device_type = kind
            prefs.get_devices()
            gpus = [d for d in prefs.devices if d.type == kind]
            if gpus:
                for d in prefs.devices:
                    d.use = d.type == kind
                c.device = 'GPU'
                print('GPU:', kind, [d.name for d in gpus])
                break
        except TypeError:
            continue
except Exception as e:
    print('GPU setup failed, CPU render:', e)

scene.frame_start, scene.frame_end = [int(v) for v in A.range.split(',')] if A.range else (0, END - 1)
if A.save:
    bpy.ops.wm.save_as_mainfile(filepath=A.save)
if A.anim:
    r.filepath = A.out.rstrip('/') + '/'
    bpy.ops.render.render(animation=True)
else:
    for f in [int(x) for x in A.frames.split(',')]:
        scene.frame_set(f)
        r.filepath = f'{A.out}/still-{f:03d}.png'
        bpy.ops.render.render(write_still=True)
print('done')
