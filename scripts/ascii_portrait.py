"""Render a recognizable ASCII portrait PNG from the source photo.

Reads the original carnet photo, maps luminance to a 70-level glyph ramp with
contrast enhancement, and rasterizes it with a monospace font to a crisp PNG.
Output overwrites public/CV_Image.png (transparent background so it sits on the
frame surface in both light and dark themes).
"""

from PIL import Image, ImageOps, ImageEnhance, ImageDraw, ImageFont

SRC = r"C:\Users\guido\Pictures\FotoCarnet_Yo_CV.png"
OUT = r"D:\IT\Projects\portfolio\public\CV_Image.png"

# Light -> dark ramp (index 0 = white/space, last = densest ink).
RAMP = " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@"

COLS = 145          # horizontal glyph resolution
CHAR_ASPECT = 0.52  # monospace cell height/width correction
CELL = 11           # px per glyph cell in the output raster
INK = (24, 24, 27)  # zinc-900, drawn on transparent bg

def main():
    img = Image.open(SRC).convert("L")

    # Trim the wide white margins so the subject fills the full width.
    inv = ImageOps.invert(img)
    bbox = inv.point(lambda p: 255 if p > 28 else 0).getbbox()
    if bbox:
        pad = int(min(img.size) * 0.015)
        l, t, r, b = bbox
        img = img.crop((max(0, l - pad), max(0, t - pad),
                        min(img.width, r + pad), min(img.height, b + pad)))

    # Pad to a square with a small, even margin so the head sits centered in the
    # 1:1 frame (no letterbox, balanced negative space on all sides).
    side = int(max(img.size) * 1.08)
    sq = Image.new("L", (side, side), 255)
    sq.paste(img, ((side - img.width) // 2, (side - img.height) // 2))
    img = sq

    img = ImageOps.autocontrast(img, cutoff=1)
    # Deepen midtones (gamma > 1) so facial features read as denser glyphs,
    # then add global contrast.
    img = img.point(lambda p: int(255 * (p / 255) ** 1.4))
    img = ImageEnhance.Contrast(img).enhance(1.5)

    rows = int(COLS * CHAR_ASPECT)
    small = img.resize((COLS, rows), Image.LANCZOS)
    px = small.load()

    n = len(RAMP) - 1
    lines = []
    for y in range(rows):
        line = []
        for x in range(COLS):
            lum = px[x, y]
            line.append(RAMP[int((255 - lum) / 255 * n)])
        lines.append("".join(line))

    # Rasterize to PNG with a monospace face.
    cw = int(CELL * CHAR_ASPECT * 1.0) + 5
    ch = CELL + 5
    try:
        font = ImageFont.truetype(r"C:\Windows\Fonts\consola.ttf", CELL)
    except OSError:
        font = ImageFont.load_default()

    W, H = COLS * cw, rows * ch
    # Square the raster so it fits the 1:1 frame with no letterbox; the
    # proportionally-correct (wider) glyph block is centered vertically.
    side = max(W, H)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    ox, oy = (side - W) // 2, (side - H) // 2
    for j, line in enumerate(lines):
        for i, c in enumerate(line):
            if c != " ":
                draw.text((ox + i * cw, oy + j * ch), c, font=font,
                          fill=INK + (255,))

    canvas.save(OUT)
    print(f"saved {OUT} ({side}x{side}), grid {COLS}x{rows}")

if __name__ == "__main__":
    main()
