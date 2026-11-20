"""Example: make a figure that matches the site.

    python figures/example_plot.py

Writes public/figures/example.svg — use it in a post with
    ![Alt text](/figures/example.svg "Fig. 2 — your caption")
or in a project's frontmatter with
    figure: /figures/example.svg
"""
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
plt.style.use(ROOT / "figures.mplstyle")

layers = np.arange(1, 25)
acc = 0.5 + 0.45 / (1 + np.exp(-(layers - 12) / 2))

fig, ax = plt.subplots()
ax.plot(layers, acc, marker="o", markerfacecolor="#fffdf7")
ax.fill_between(layers, 0.45, acc, color="#d5e5cc", zorder=0)
ax.axhline(0.5, color="#6f6656", linestyle=":", linewidth=1.2)
ax.set_xlabel("layer")
ax.set_ylabel("probe accuracy")
ax.set_ylim(0.45, 1.0)

out = ROOT / "public" / "figures" / "example.svg"
fig.savefig(out)
print(f"wrote {out}")
