Not every click should be a `<button>`.

The rule is simpler than it looks: if the destination changes, it's a link. If it doesn't, it's a button.

<div class="demo">
  <div class="demo-item">
    <div style="padding:16px;">
      <strong>Navigate</strong>
      <p style="margin:8px 0;">Goes to a new page or section. Back button and open in a new tab both just work.</p>
      <code class="demo-label">&lt;a href="/pricing"&gt;View pricing&lt;/a&gt;</code>
    </div>
  </div>
  <div class="demo-item">
    <div style="padding:16px;">
      <strong>Act</strong>
      <p style="margin:8px 0;">Submits, toggles, opens a modal. No URL, no new page, just an action.</p>
      <code class="demo-label">&lt;button type="button"&gt;Add to cart&lt;/button&gt;</code>
    </div>
  </div>
</div>

## Why it matters

`<a>` and `<button>` come with different behavior built in, and assistive technology relies on that difference to tell users what will happen before they click.

- A link gets announced as "link" and users expect a navigation, a new URL, a working back button, the option to open it in a new tab or copy its address.
- A button gets announced as "button" and users expect an action on the current page, nothing more.

Swap them and you break those expectations. A `<div onClick>` breaks them entirely.

```html
<!-- navigates: use a link -->
<a href="/pricing">View pricing</a>

<!-- performs an action: use a button -->
<button type="button">Add to cart</button>
```

## Common mistakes

```html
<!-- a click handler on a div: no keyboard access, no role, no focus -->
<div onclick="addToCart()">Add to cart</div>

<!-- a link styled as a button, going nowhere -->
<a href="#" onclick="addToCart()">Add to cart</a>

<!-- a button pretending to navigate -->
<button onclick="location.href='/pricing'">View pricing</button>
```

Each of these looks fine visually and fails for keyboard and screen reader users, or just does the wrong thing semantically.

## A quick checklist

- Use `<a>` when the destination changes.
- Use `<button>` for actions and toggles.
- Add `type="button"` on buttons that aren't submitting a form, so a stray click inside a `<form>` doesn't trigger a submit.
- Never use `<div onClick>` for anything clickable.
- Never use `<a href="#">` just to get button styling.

## Resources

- [MDN: `<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [MDN: `<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [WAI-ARIA Authoring Practices Guide: Link](https://www.w3.org/WAI/ARIA/apg/patterns/link/)
- [WAI-ARIA Authoring Practices Guide: Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
