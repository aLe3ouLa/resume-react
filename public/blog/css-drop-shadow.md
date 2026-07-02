`box-shadow` quite literally makes a box. shadow. That means it always casts a rectangle, no matter the shape of your element. I find quite fascinating though the functions that CSS provide, which allow you to make more interesting stuff. `filter` is one of them. More specifically`filter: drop-shadow()` follows the **alpha channel**, so the shadow looks like the real shape.

<div class="demo">
  <div class="demo-item">
    <div style="padding:16px;">
      <div style="box-shadow:10px 10px 0 black;display:inline-block;">
        <div style="clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);background:#E0399B;width:90px;height:90px;"></div>
      </div>
    </div>
    <code class="demo-label">box-shadow</code>
  </div>
  <div class="demo-item">
    <div style="padding:16px;">
      <div style="filter:drop-shadow(10px 10px 0 black);">
        <div style="clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);background:#E0399B;width:90px;height:90px;"></div>
      </div>
    </div>
    <code class="demo-label">drop-shadow()</code>
  </div>
</div>

The example shows a star shadow implemented with the two alternative ways. `box-shadow` renders behind the element's **box** and the clip cuts it off. `drop-shadow()` is applied *after* painting, so the shadow follows the actual shape.

```css
/* box-shadow — shadow is always rectangular */
.icon { box-shadow: 4px 4px 8px black; }

/* drop-shadow — shadow follows the actual shape */
.icon { filter: drop-shadow(4px 4px 8px black); }
```

This makes all the difference for PNGs with transparency, SVGs, and cut-out shapes.

## Syntax

```css
filter: drop-shadow(<offset-x> <offset-y> <blur> <color>);
```

The color property can set as first or last, it doesn't matter. Blur defaults to `0` if omitted.

```css
filter: drop-shadow(4px 4px 8px crimson);
filter: drop-shadow(crimson 4px 4px 8px); /* same thing */
filter: drop-shadow(4px 4px);             /* sharp shadow, uses currentColor */
```

## Stack multiple shadows

you can chain `drop-shadow()` calls inside a single `filter` to layer shadows:

```css
filter:
  drop-shadow(1px 1px 0 navy)
  drop-shadow(-1px -1px 0 navy);
```

## What it doesn't support

⚠️ Unlike `box-shadow`, there is no `inset` or **spread** parameter.

## Resources

- [MDN — drop-shadow()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)
- [MDN — filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [MDN — box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
