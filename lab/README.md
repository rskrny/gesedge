# Dovetail study (preview only)

Media for the `/lab/` page on the English preview (`src/en/pages/[lab].astro`). `scripts/build.mjs` copies
`lab/media/` into the build only when `PREVIEW=1`, so a production build has no lab page and no lab file.

`lab_anim.py` is `.ai/deliverables/logo-anim/joint_anim.py` with the same geometry, materials, lights, exposure,
camera and render settings, and a `--variant` switch for the motion (meet, turntable, pair). Slide is the hero's
own frames.

Render (Blender 5.1, one process at a time), then encode each folder of 480 px RGBA frames:

    blender -b -P lab/lab_anim.py -- --variant meet --anim --out C:/tmp/lab/frames/meet --res 480 --samples 32
    ffmpeg -framerate 30 -i C:/tmp/lab/frames/meet/%04d.png \
      -filter_complex "color=black:s=480x480:r=30[bg];[bg][0]overlay=shortest=1,format=yuv420p" -an \
      -c:v libsvtav1 -preset 4 -crf 38 -g 300 -svtav1-params tune=0 -loop 0 lab/media/2-meet.avif

Slide: the same ffmpeg line on the hero frames (800 px) with `scale=480:480:flags=lanczos` before `format`.
The hero files `public/media/joint-520.avif` and `joint-800.avif` use the hero frames with `crf 38`, `-g 240`
and scales 520 and 800.
