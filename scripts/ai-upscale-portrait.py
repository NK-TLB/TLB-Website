#!/usr/bin/env python3
"""
AI super-resolution for the Shourya Jain portrait using GFPGAN v1.4.

Restores facial detail and upscales the low-res phone photo without changing
the composition/crop. Output is a high-res PNG master that the JS export
pipeline (process-shourya-portrait.mjs) then turns into web tiers.

Usage: python3 scripts/ai-upscale-portrait.py
"""
import os
import sys
import warnings

warnings.filterwarnings("ignore")

import cv2  # noqa: E402
import numpy as np  # noqa: E402

# torchvision >= 0.17 removed functional_tensor that basicsr imports.
# Shim it back to keep GFPGAN/basicsr working on modern torch.
try:
    import torchvision.transforms.functional_tensor  # noqa: F401
except ModuleNotFoundError:
    import torchvision.transforms.functional as _F
    import types

    shim = types.ModuleType("torchvision.transforms.functional_tensor")
    shim.rgb_to_grayscale = _F.rgb_to_grayscale
    sys.modules["torchvision.transforms.functional_tensor"] = shim

from gfpgan import GFPGANer  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "assets", "source", "shourya-jain.jpeg")
OUT = os.path.join(HERE, "..", "assets", "source", "shourya-jain-ai.png")
MODEL = os.path.expanduser(
    "~/Library/Python/3.9/lib/python/site-packages/gfpgan/weights/GFPGANv1.4.pth"
)

UPSCALE = 4  # 739x1600 -> ~2956x6400, downsized later to web tiers


def main() -> int:
    img = cv2.imread(SRC, cv2.IMREAD_COLOR)
    if img is None:
        print(f"ERROR: cannot read {SRC}")
        return 1
    h, w = img.shape[:2]
    print(f"Source: {w}x{h}")

    restorer = GFPGANer(
        model_path=MODEL,
        upscale=UPSCALE,
        arch="clean",
        channel_multiplier=2,
        bg_upsampler=None,  # face-faithful; background gets clean cubic upscale
    )

    # weight=0.5 keeps identity faithful while still restoring detail.
    _, _, restored = restorer.enhance(
        img,
        has_aligned=False,
        only_center_face=True,
        paste_back=True,
        weight=0.5,
    )

    if restored is None:
        print("ERROR: enhancement returned no image")
        return 1

    rh, rw = restored.shape[:2]
    cv2.imwrite(OUT, restored, [cv2.IMWRITE_PNG_COMPRESSION, 3])
    print(f"Saved: {OUT} -> {rw}x{rh}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
