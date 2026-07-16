![CSS specificity consists of ID, class, and element weight categories](/blog/css-specificity.png)

Have you ever changed a CSS property and wondered why nothing happened? You may have opened DevTools, found your declaration crossed out, and fixed it by adding `!important`.

The real reason is often `*drumroll*`... **CSS specificity**.

Specificity is the algorithm browsers use to decide which selector is more relevant when multiple CSS rules target the same element. Once you understand how selectors are compared, you can predict which declaration wins without guessing.

> Learning goal: calculate a selector's specificity, predict which declaration wins, and override styles without reaching for `!important`.

## Specificity has three weight categories

For stylesheet selectors, we can represent specificity using three values:

```text
(ID, Class, Element)
```

Each part counts a different kind of selector:

- **ID** counts ID selectors such as `#title`.
- **Class** counts classes, attributes, and pseudo-classes such as `.text`, `[disabled]`, and `:hover`.
- **Element** counts element selectors and pseudo-elements such as `p` and `::before`.

Here are three simple examples:

```css
#title { color: blue; } /* (1, 0, 0) */
.text  { color: blue; } /* (0, 1, 0) */
p      { color: blue; } /* (0, 0, 1) */
```

IDs have the highest weight, followed by classes, then elements.

## Count every part of the selector

Longer selectors can contain more than one category. Count each selector and place the total in the correct column.

```css
#checkout button.button:hover { /* (1, 2, 1) */ }
.card button            { /* (0, 1, 1) */ }
main article p          { /* (0, 0, 3) */ }
```

For `#checkout button.button:hover`:

- `#checkout` adds one to the ID category.
- `.button` adds one to the Class category.
- `:hover` adds another one to the Class category.
- `button` adds one in the element category.

Its final specificity is `(1, 2, 0)`.

## Compare from left to right

Specificity is not one total score. Compare the three categories from left to right:

1. Compare the number of IDs.
2. If they are equal, compare the number of classes.
3. If those are also equal, compare the number of elements.

Consider this button:

```html
<button id="save" class="button primary">Save</button>
```

```css
#save { color: green; }          /* (1, 0, 0) */
.button.primary { color: blue; } /* (0, 2, 0) */
button { color: red; }           /* (0, 0, 1) */
```

The button is **green**. The selector `#save` is the only one with an ID, so `(1, 0, 0)` beats both `(0, 2, 0)` and `(0, 0, 1)`.

Adding many classes or elements cannot outweigh a single ID because the ID category is compared first.

## What if specificity is equal?

When two declarations have the same specificity, the rule that appears later in the stylesheet wins. This is called source order.

```css
.button {
  color: rebeccapurple;
}

.button {
  color: tomato;
}
```

Both selectors have a specificity of `(0, 1, 0)`, so the button becomes **tomato**.


## Selectors that add no weight

The universal selector `*` and combinators such as `>`, `+`, and `~` do not affect specificity.

```css
* > .title { /* (0, 1, 0) */ }
```

Only `.title` contributes to the specificity value.

The `:where()` pseudo-class is also special: it always has zero specificity, including the selectors inside it.

```css
:where(.article) h2 { /* (0, 0, 1) */ }
```

Here, `.article` adds no weight. Only `h2` contributes to the final value.

This makes `:where()` useful when you want to provide default styles that remain easy to override.

## Special cases

### Inline styles

Styles written directly in an HTML `style` attribute take priority over normal author stylesheet declarations.

```html
<p class="message" style="color: purple">Hello!</p>
```

A normal `.message` rule will not override this inline color. It is better to use classes for styling whenever possible because they are easier to maintain and reuse.

### `!important`

An `!important` declaration wins over normal declarations in the same cascade origin and layer.

```css
.message {
  color: red !important;
}
```

This does not add to the selector's specificity. Instead, it changes which declarations are considered before specificity is compared. If two competing declarations are both `!important`, their specificity helps decide the winner.

Use `!important` carefully. It can make future overrides harder and often hides a problem in the CSS structure.

### `:is()`, `:not()`, and `:has()`

The pseudo-classes `:is()`, `:not()`, and `:has()` do not add their own class weight. Instead, they take the specificity of the most specific selector in their argument list.

```css
:is(.card, #featured) p { /* (1, 0, 1) */ }
```

The most specific option is `#featured`, so the selector receives its ID weight, plus the element weight from `p`.

## Specificity is only one part of the cascade

Specificity does not make every CSS decision by itself. Before comparing selector weights, the browser also considers factors such as:

- where the style comes from;
- whether a declaration uses `!important`;
- which cascade layer contains the rule;
- and whether the declaration applies in the current context.

If the competing declarations are still equal, the browser compares specificity and then source order.


## Try it yourself

What color will this link be?

```html
<nav id="main-nav">
  <a class="link active" href="/">Home</a>
</nav>
```

```css
nav a { color: navy; }              /* (0, 0, 2) */
.link.active { color: orange; }      /* (0, 2, 0) */
#main-nav .link { color: purple; }   /* (1, 1, 0) */
```

<details>
  <summary>Show the answer</summary>

  <p>The link is <strong>purple</strong>. <code>#main-nav .link</code> is the only selector with an ID, so its specificity of <code>(1, 1, 0)</code> wins.</p>
</details>

## Key takeaways

- Represent selector specificity as `(ID, Class, Element)`.
- Compare the values from left to right instead of adding them together.
- If specificity is equal, the declaration that appears later wins.
- The universal selector, combinators, and `:where()` add no specificity.
- Specificity is only one part of the cascade.
- Keeping specificity low makes CSS easier to reuse, debug, and override.

The next time a declaration is crossed out, pause before adding `!important`. Calculate the selectors' specificity, check the rest of the cascade, and let the browser show you why one rule won.
