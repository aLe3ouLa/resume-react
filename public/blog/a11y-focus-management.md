The scenario is simple: You got a modal that looks perfect but traps keyboard users in the wrong place? Oh well, your focus management might be missing.

> > When a dialog opens, moving focus is not optional.

A mouse user can click inside the modal. A keyboard user needs the browser to know where they are.

Bad:

```html
<button>Delete account</button>

<div class="modal">
    Are you sure?
    <button>Confirm</button>
</div>
```

The modal appears, but keyboard focus stays on the button behind it.

## Move focus when opening

```javascript
const button = document.querySelector('#confirm');

modal.show();

button.focus();
```

Now keyboard and screen reader users land directly where the action is.

## But closing matters too

When the modal disappears, focus should return to the element that opened it:

```javascript
openButton.focus();
```

Otherwise users may suddenly find themselves back at the top of a page, with no idea what happened.

## A good dialog should handle:

✅ Move focus into the dialog
✅ Keep focus inside while open
✅ Close with `Escape`
✅ Return focus to the trigger

## Use native HTML when possible

The browser already knows how to handle many of these behaviours:

```html
<dialog>
    <h2>Delete account?</h2>
    <button>Confirm</button>
</dialog>
```

Native elements give you accessibility behaviour instead of making you rebuild it yourself.

## Focus management in frameworks

The idea is the same in React, Vue, or any other framework: keep a reference to the element that should receive focus and call `.focus()` when the UI state changes.

React:

```jsx
const buttonRef = useRef(null);

useEffect(() => {
  if (isOpen) {
    buttonRef.current?.focus();
  }
}, [isOpen]);

<button ref={buttonRef}>
  Confirm
</button>

> Accessibility is not only about what users can see. It is also about where the browser puts them.
```
