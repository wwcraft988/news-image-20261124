"""Turn the browser screenshot into the entry: 1024x1024 RGB PNG, no metadata, at most 1 MiB."""
import io
import sys

from PIL import Image

LIMIT = 1024 * 1024
src, dst = sys.argv[1], sys.argv[2]

img = Image.open(src).convert("RGB")
if img.size != (1024, 1024):
    img = img.crop((0, 0, 1024, 1024))

data = None
for colors in (None, 256, 192, 128):
    candidate = img if colors is None else img.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    buf = io.BytesIO()
    candidate.save(buf, format="PNG", optimize=True)
    data = buf.getvalue()
    if len(data) <= LIMIT:
        break

if len(data) > LIMIT:
    sys.exit(f"entry is {len(data)} bytes, over 1 MiB")
with open(dst, "wb") as f:
    f.write(data)
print(f"wrote {dst}: {img.size[0]}x{img.size[1]}, {len(data)} bytes ({'full colour' if colors is None else f'{colors} colours'})")
