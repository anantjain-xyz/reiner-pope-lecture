# ML Infrastructure Deep Dives

- Source video: [Reiner Pope on Dwarkesh Patel's podcast](https://www.youtube.com/watch?v=xmkSf5IS-zw)
- Live site: [anantjain-xyz.github.io/reiner-pope-lecture](https://anantjain-xyz.github.io/reiner-pope-lecture/)

A self-study companion site to Reiner Pope's blackboard interview on Dwarkesh Patel's podcast. Fifteen tutorials. Each one starts cold and builds to where you can follow the original papers without help.

## Topics

**Inference economics**
1. Roofline analysis from first principles
2. The 300 × sparsity batch-size rule
3. 6ND floating-point operation accounting
4. API pricing forensics

**Architecture choices**
5. DeepSeek's fine-grained Mixture of Experts
6. Sparse attention
7. Attention variants: multi-head to latent
8. Character.AI's inference stack
9. Flash Attention v1 → v2 → v3
10. Reversible networks

**Hardware and systems**
11. NVLink, NVSwitch, and rack topology
12. Pipeline scheduling
13. The memory wall

**Scaling and theory**
14. Chinchilla scaling and over-training
15. Differential cryptanalysis

## Running locally

It's static HTML. Either open `index.html` directly:

```sh
open index.html
```

or serve it:

```sh
python3 -m http.server 8080
```

then visit `http://localhost:8080`.

## Structure

- `index.html` — landing page with all 15 topics
- `01-*.html` … `15-*.html` — one tutorial per topic
- `style.css` — shared styling
- `TEMPLATE.html` — skeleton used to scaffold each tutorial

Each tutorial follows the same shape: TL;DR → Why this matters → Beginner → Intermediate → Advanced → Open questions → References.

## Source

All topics are drawn from Dwarkesh Patel's blackboard interview with Reiner Pope (CEO of MatX). Every tutorial cites primary sources at the bottom.
