"""Generate favicon candidates on-brand with the portfolio (zinc tile + emerald).

Renders two concepts at a few sizes for legibility comparison, plus the final
multi-size .ico for the chosen one.
"""

from PIL import Image, ImageDraw, ImageFont

OUTDIR = r"D:\IT\Projects\portfolio\scripts\_fav"
import os
os.makedirs(OUTDIR, exist_ok=True)

BG = (9, 9, 11, 255)        # zinc-950
DIM = (39, 39, 42, 255)     # zinc-800 (unlit bits)
EMERALD = (52, 199, 140, 255)

# 7x7 bitmap of a "G" (1 = lit)
G = [
    "0111110",
    "1000001",
    "1000000",
    "1001110",
    "1000010",
    "1000011",
    "0111110",
]


def rounded_tile(size, radius_ratio=0.22):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    r = int(size * radius_ratio)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=r, fill=BG)
    return img, d


def concept_bits(size):
    img, d = rounded_tile(size)
    grid = 7
    pad = size * 0.16
    cell = (size - 2 * pad) / grid
    gap = cell * 0.16
    for y, row in enumerate(G):
        for x, ch in enumerate(row):
            x0 = pad + x * cell + gap / 2
            y0 = pad + y * cell + gap / 2
            x1 = pad + (x + 1) * cell - gap / 2
            y1 = pad + (y + 1) * cell - gap / 2
            color = EMERALD if ch == "1" else DIM
            d.rounded_rectangle([x0, y0, x1, y1], radius=cell * 0.18, fill=color)
    return img


def concept_glyph(size):
    img, d = rounded_tile(size)
    try:
        font = ImageFont.truetype(r"C:\Windows\Fonts\consolab.ttf",
                                  int(size * 0.7))
    except OSError:
        font = ImageFont.load_default()
    text = "g"
    box = d.textbbox((0, 0), text, font=font)
    tw, th = box[2] - box[0], box[3] - box[1]
    d.text(((size - tw) / 2 - box[0], (size - th) / 2 - box[1]),
           text, font=font, fill=EMERALD)
    return img


for name, fn in [("bits", concept_bits), ("glyph", concept_glyph)]:
    for s in (256, 64, 32, 16):
        fn(s).save(os.path.join(OUTDIR, f"{name}_{s}.png"))
print("candidates written to", OUTDIR)


def build_final():
    """Write the chosen 'glyph g' favicon as a multi-size .ico + apple-touch PNG.

    The .ico embeds 16/32/48/64/256 frames so browsers pick the crispest one for
    tabs, bookmarks and the address bar. Each frame is rendered at native size
    (not downscaled) so small sizes stay sharp.
    """
    pub = r"D:\IT\Projects\portfolio\public"
    sizes = (16, 32, 48, 64, 128, 256)
    frames = [concept_glyph(s) for s in sizes]
    # PIL writes the first image and resamples the rest from sizes= unless we pass
    # append_images; render each natively and let Pillow pack them.
    frames[-1].save(
        os.path.join(pub, "favicon.ico"),
        format="ICO",
        sizes=[(s, s) for s in sizes],
        append_images=frames[:-1],
    )
    # Apple touch icon (no transparency, 180px) for iOS home-screen.
    concept_glyph(180).save(os.path.join(pub, "apple-touch-icon.png"))
    # Modern PNG favicons under fresh filenames so browsers/CDN can't serve a
    # stale cached /favicon.ico in their place.
    concept_glyph(32).save(os.path.join(pub, "favicon-32.png"))
    concept_glyph(16).save(os.path.join(pub, "favicon-16.png"))
    print("final favicon.ico + apple-touch-icon.png written to", pub)


build_final()
