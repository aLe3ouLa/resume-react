Have you ever had to add a negative margin in your code just because your text had a mysterious gap on top of your heading that you couldn't explain??

That weird space was occurring because font files have some vertical metrics that describe how much empty space to leave above and below each of the letters.

<svg viewBox="0 0 520 180" width="100%" style="max-width: 480px; height: auto; display: block; margin: 1.5rem auto;" role="img" aria-labelledby="lb-title lb-desc">
  <title id="lb-title">Line box before and after text-box trimming</title>
  <desc id="lb-desc">Two boxes each containing the glyphs "Ag". The left box is tall, with visible empty space above and below the letters. The right box is short and hugs the letters tightly, from the cap height down to the baseline.</desc>
  <rect x="20" y="20" width="200" height="130" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="50" y="112" font-family="Georgia, serif" font-size="64" fill="#1f2937">Ag</text>
  <text x="120" y="168" text-anchor="middle" font-size="13" fill="#64748b" font-family="sans-serif">text-box: none</text>
  <text x="245" y="100" font-size="26" fill="#94a3b8" font-family="sans-serif">&#8594;</text>
  <rect x="300" y="58" width="200" height="58" fill="#f5f3ff" stroke="#7c6cf0" stroke-width="1.5"/>
  <text x="330" y="112" font-family="Georgia, serif" font-size="64" fill="#1f2937">Ag</text>
  <text x="400" y="152" text-anchor="middle" font-size="13" fill="#7c6cf0" font-weight="600" font-family="sans-serif">trim-both cap alphabetic</text>
</svg>

CSS introduced the `text-box` prop that lets you trim that space, so your text hugs tightly its box instead of just float inside it.

```css
.text-container {
    text-box: trim-both cap alphabetic;
}
```

In the example above, there are two instructions:

1. Trim space from **both** the top and bottom of the text.

- On top, trim down to where the capital letters start (cap). On the bottom, trim down to where the letters sit (alphabetic).

> > `text-box` is shorthand for `text-box-trim` and `text-box-edge`. So alternatively, we could write:

```css
.heading {
    text-box-trim: trim-both;
    text-box-edge: cap alphabetic;
}
```

## text-box-trim

`text-box-trim` just answers the question "which side to trim?" like top, bottom, both, or neither?

- `trim-start`: remove space above the text only
- `trim-end`: remove space below the text only
- `trim-both`: remove space on both sides
- `none`: default, no trimming

## text-box-edge: how much to trim

Once you've picked a side, `text-box-edge` says exactly where to cut it off. Think of it as choosing a ruler mark to trim to.

<svg viewBox="0 0 520 200" width="100%" style="max-width: 480px; height: auto; display: block; margin: 1.5rem auto;" role="img" aria-labelledby="edge-title edge-desc">
  <title id="edge-title">text-box-edge reference lines</title>
  <desc id="edge-desc">The letters "Ag" with horizontal guide lines marking, from top to bottom: text-top, cap-height, x-height, the alphabetic baseline, and text-bottom.</desc>
  <line x1="20" y1="15" x2="500" y2="15" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="20" y1="45" x2="500" y2="45" stroke="#7c6cf0" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="20" y1="80" x2="500" y2="80" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="20" y1="140" x2="500" y2="140" stroke="#16a34a" stroke-width="2"/>
  <line x1="20" y1="170" x2="500" y2="170" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="40" y="140" font-family="Georgia, serif" font-size="150" fill="#1f2937">Ag</text>
  <text x="340" y="11" font-size="13" fill="#64748b" font-family="sans-serif">text-top</text>
  <text x="340" y="41" font-size="13" fill="#7c6cf0" font-weight="600" font-family="sans-serif">cap-height (cap)</text>
  <text x="340" y="76" font-size="13" fill="#f59e0b" font-weight="600" font-family="sans-serif">x-height (ex)</text>
  <text x="340" y="136" font-size="13" fill="#16a34a" font-weight="600" font-family="sans-serif">baseline (alphabetic)</text>
  <text x="340" y="166" font-size="13" fill="#64748b" font-family="sans-serif">text-bottom</text>
</svg>

- `text`: the font's own default spacing
- `cap`: trims to the top of capital letters
- `ex`: trims to the top of lowercase letters like `x` (top edge only)
- `alphabetic`: trims to the baseline, the invisible line letters like `a` and `g` rest on. It ignores the little tails on letters like `g`, `p`, `y`.
- `ideographic` / `ideographic-ink`: for Chinese/Japanese/Korean text

```css
/* single keyword: applies to both edges when the keyword is valid on both */
.tight-both {
    text-box-edge: text; /* over: text, under: text */
}

/* a single over-edge-only keyword still needs a pair —
   the missing under edge falls back to "text", not to the same keyword */
.tight-cap {
    text-box-edge: cap; /* equivalent to: cap text */
}

/* two keywords: over-edge under-edge */
.tight-mixed {
    text-box-edge: ex alphabetic;
}
```

## Browser support

`text-box` is a relatively new CSS feature, so browser support is still evolving. Before using it in production, check the current support status for your target browsers.

## References

- [MDN: text-box](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box)
- [MDN: text-box-trim](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim)
- [MDN: text-box-edge](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-edge)
- [Can I use: text-box](https://caniuse.com/mdn-css_properties_text-box)
