---
title: Notes on doing safety research outside a lab
date: 2026-10-28
tags: [meta, research]
description: The habits that keep independent research honest.
---

Working on AI safety without an institution behind you is mostly a question of structure. Nobody sets your deadlines, nobody reviews your half-finished plots, and nobody tells you when an idea is already dead. This post is a short list of the habits that have kept me honest so far.

## Keep a lab notebook, even a messy one

Every experiment gets an entry before it runs: what I expect, why, and what would change my mind. Writing the prediction down first is the cheapest guard against fooling myself afterwards.

```
## 2026-10-12 · probe sweep
expect:          accuracy peaks mid-network
would update if: flat across layers
status:          running
```

![Probe accuracy by layer](/figures/goal-probes.svg "Fig. 1 — Probe accuracy peaks in the middle layers. (Figures with a caption get this frame automatically.)")

## Ship small things in public

A short write-up that someone can poke at beats a long one that stays in a drafts folder. Most of the useful feedback I have had came from posts I almost didn't publish.

> Write the prediction down before you look at the plot.

That is most of it. The rest is patience, a cheap GPU, and friends who are willing to tell you that your favourite result is probably a bug.
