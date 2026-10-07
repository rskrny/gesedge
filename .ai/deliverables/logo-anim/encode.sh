#!/bin/sh
# Encode the Blender frames (RGBA PNG, 800 px, 30 fps, 240 frames) for the hero.
#   sh encode.sh C:/tmp/ges-anim/frames public/media
# Videos are composited on pure black (the page blends them with `lighten`), no audio, BT.709 tags.
set -e
IN=${1:-C:/tmp/ges-anim/frames}
OUT=${2:-public/media}
mkdir -p "$OUT"
TAGS="-colorspace bt709 -color_primaries bt709 -color_trc bt709 -color_range tv"

for S in 800 520; do
  VF="color=black:s=800x800:r=30[bg];[bg][0]overlay=shortest=1,scale=$S:$S:flags=lanczos:out_color_matrix=bt709:out_range=tv,format=yuv420p"
  ffmpeg -y -v error -framerate 30 -i "$IN/%04d.png" -filter_complex "$VF" -an \
    -c:v libsvtav1 -preset 3 -crf 36 -g 240 -svtav1-params tune=0 $TAGS "$OUT/joint-$S.webm"
  ffmpeg -y -v error -framerate 30 -i "$IN/%04d.png" -filter_complex "$VF" -an \
    -c:v libx264 -preset veryslow -crf 23 -profile:v high -level:v 4.0 -g 240 -movflags +faststart $TAGS "$OUT/joint-$S.mp4"
done

# poster: frame 0, the face-on mark, on black (blended like the video). still: the held 3/4 lock, with alpha.
ffmpeg -y -v error -i "$IN/0000.png" -filter_complex "color=black:s=800x800[bg];[bg][0]overlay" -frames:v 1 -c:v libwebp -quality 90 "$OUT/joint-poster.webp"
ffmpeg -y -v error -i "$IN/0178.png" -frames:v 1 -c:v libwebp -quality 90 -pix_fmt yuva420p "$OUT/joint-still.webp"
ls -l "$OUT"
