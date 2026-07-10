`box-shadow` quite literally makes a box. shadow. That means it always casts a rectangle, no matter the shape of your element. I find quite fascinating though the functions that CSS provide, which allow you to make more interesting stuff. `filter` is one of them. A `drop shadow` filter is a (optionally) blurred, offset version of the input image's alpha mask, drawn in a specific color and composited below the image.

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

The example shows a star shadow implemented with the two alternative ways. 

>>  The box-shadow property creates a rectangular shadow behind an element's entire box, 
>> while the drop-shadow() filter function creates a shadow that conforms to
>>  the shape (alpha channel) of the image itself.


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

<div class="demo"> 
  <div class="demo-item">
    <div style="padding:16px;">
      <div style="filter:drop-shadow(10px 10px);">
        <div style="clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);background:#E0399B;width:90px;height:90px;"></div>
      </div>
    </div>
    <code class="demo-label">drop-shadow(10px 10px)</code>
  </div>
  <div class="demo-item">
    <div style="padding:16px;">
      <div style="filter:drop-shadow(-10px -10px);">
        <div style="clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);background:#E0399B;width:90px;height:90px;"></div>
      </div>
    </div>
    <code class="demo-label">drop-shadow(-10px -10px)</code>
  </div>
  <div class="demo-item">
    <div style="padding:16px;">
      <div style="filter:drop-shadow(10px 10px crimson);">
        <div style="clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);background:#E0399B;width:90px;height:90px;"></div>
      </div>
    </div>
    <code class="demo-label">drop-shadow(10px 10px crimson)</code>
  </div>
  <div class="demo-item">
    <div style="padding:16px;">
      <div style="filter:drop-shadow(10px 10px 10px crimson);">
        <div style="clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);background:#E0399B;width:90px;height:90px;"></div>
      </div>
    </div>
    <code class="demo-label">drop-shadow(10px 10px 10px crimson)</code>
  </div>
  <div class="demo-item">
    <div style="padding:16px;">
      <div style="filter: drop-shadow(1px 1px) drop-shadow(1px -1px) drop-shadow(-1px 1px) drop-shadow(-1px -1px);">
        <div style="clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);background:#E0399B;width:90px;height:90px;"></div>
      </div>
    </div>
    <code class="demo-label">drop-shadow(1px 1px) drop-shadow(1px -1px) drop-shadow(-1px 1px) drop-shadow(-1px -1px)</code>
  </div>
</div>

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
