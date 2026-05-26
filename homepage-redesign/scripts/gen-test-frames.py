"""
Generate WebP test frames for hero-neural scroll sequence.

Desktop: public/assets/scroll-sequences/hero-neural/desktop/frame-001.webp … frame-120.webp
Mobile:  public/assets/scroll-sequences/hero-neural/mobile/frame-001.webp  … frame-060.webp

Run from the homepage-redesign root:
  python3 scripts/gen-test-frames.py
"""

import os
from PIL import Image, ImageDraw

DESKTOP_TOTAL  = 120
MOBILE_TOTAL   = 60
DESKTOP_W, DESKTOP_H = 1920, 1080
MOBILE_W, MOBILE_H   = 960, 540

BG    = (13, 17, 23)       # #0D1117
CYAN  = (0, 242, 254)      # #00F2FE
MUTED = (126, 155, 181)    # #7E9BB5
WHITE = (232, 237, 244)    # #E8EDF4

BASE = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "scroll-sequences", "hero-neural")
DESKTOP_DIR = os.path.join(BASE, "desktop")
MOBILE_DIR  = os.path.join(BASE, "mobile")
os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(MOBILE_DIR,  exist_ok=True)


def scaled_text(text, char_w=8, char_h=14, scale=1, fg=CYAN, bg=BG):
    """Render text as a pixelated scaled-up image using Pillow's default font."""
    small = Image.new("RGB", (len(text) * char_w + 4, char_h), bg)
    ImageDraw.Draw(small).text((2, 1), text, fill=fg)
    return small.resize((small.width * scale, small.height * scale), Image.NEAREST)


def build_frame(width, height, index, total, label_prefix="DESKTOP"):
    img  = Image.new("RGB", (width, height), BG)
    draw = ImageDraw.Draw(img)

    # Progress bar at top
    bar_w = int((index / total) * width)
    draw.rectangle([0, 0, bar_w, 4], fill=CYAN)

    cx, cy = width // 2, height // 2

    # Large frame number
    frame_num = f"frame-{index:03d}"
    big = scaled_text(frame_num, scale=9, fg=CYAN, bg=BG)
    img.paste(big, ((width - big.width) // 2, cy - big.height - 20))

    # Progress %
    pct = f"{int((index / total) * 100):3d}%"
    mid = scaled_text(pct, scale=5, fg=WHITE, bg=BG)
    img.paste(mid, ((width - mid.width) // 2, cy + 20))

    # Corner label
    corner = f"{label_prefix}  {index:03d}/{total}"
    small  = scaled_text(corner, scale=2, fg=MUTED, bg=BG)
    img.paste(small, (40, height - small.height - 40))

    return img


print("Generating desktop frames (1920×1080)…")
for i in range(1, DESKTOP_TOTAL + 1):
    img = build_frame(DESKTOP_W, DESKTOP_H, i, DESKTOP_TOTAL, "DESKTOP")
    out = os.path.join(DESKTOP_DIR, f"frame-{i:03d}.webp")
    img.save(out, "WEBP", quality=72)
    if i % 30 == 0 or i == 1:
        print(f"  [{i:3d}/{DESKTOP_TOTAL}] {out}")

print(f"\nGenerating mobile frames (960×540)…")
for i in range(1, MOBILE_TOTAL + 1):
    img = build_frame(MOBILE_W, MOBILE_H, i, MOBILE_TOTAL, "MOBILE")
    out = os.path.join(MOBILE_DIR, f"frame-{i:03d}.webp")
    img.save(out, "WEBP", quality=72)
    if i % 15 == 0 or i == 1:
        print(f"  [{i:3d}/{MOBILE_TOTAL}] {out}")

print(f"\nDone. Desktop: {DESKTOP_TOTAL} frames · Mobile: {MOBILE_TOTAL} frames")
print(f"Desktop → {os.path.abspath(DESKTOP_DIR)}")
print(f"Mobile  → {os.path.abspath(MOBILE_DIR)}")
