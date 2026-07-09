Got a form error message that only appears visually? Your users might never know it exists.

A common accessibility mistake is showing validation feedback without connecting it to the input that caused the problem.

```html
<label>
  Email
  <input type="email">
</label>

<p class="error">
  Please enter a valid email address.
</p>
```

A sighted user can see the message. A screen reader user may just hear:

> "Email, edit text."

No error. No context. No clue.

## Connect errors with `aria-describedby`

```html
<label for="email">
  Email
</label>

<input
  id="email"
  type="email"
  aria-describedby="email-error"
  aria-invalid="true"
/>

<p id="email-error">
  Please enter a valid email address.
</p>
```

Now assistive technology can announce:

> "Email, invalid entry, Please enter a valid email address."

## `aria-invalid` is not a replacement for validation

This:

```html
<input aria-invalid="true">
```

only tells users that something is wrong.

It does not explain:

* what went wrong
* how to fix it
* why it matters

Pair it with helpful error text.

## Make dynamic errors discoverable

For errors that appear after submission, consider using a live region:

```html
<div role="alert">
  Your payment could not be processed.
</div>
```

The browser can announce the update without the user having to find it manually.

> Accessibility is not just making information visible. It is making sure every user can discover and understand it.

## Resources

* Web Content Accessibility Guidelines (WCAG) — Forms and error identification
  https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html

* WAI-ARIA Authoring Practices Guide — Form validation patterns
  https://www.w3.org/WAI/ARIA/apg/patterns/

* MDN — `aria-invalid` attribute
  https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid

* MDN — `aria-describedby` attribute
  https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby

* WebAIM — Creating accessible forms
  https://webaim.org/techniques/forms/
