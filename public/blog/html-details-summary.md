Every accordion tutorial starts with a click handler and a `useState`. Meanwhile HTML has been shipping one for years: `<details>` and `<summary>`. Zero JavaScript, keyboard accessible out of the box.

Accordion (or how MDN names it: a disclosure widget 🥸) is an on screen element, where the information is visible only when expanded. The contents of the `<summary>` element are used as the label for the accordions and the content of the `<details>` provide an accessible description for the `<summary>`.


```html
<details>
  <summary>Is this really built in?</summary>
  <p>Yep. Click or press Enter/Space to toggle.</p>
</details>
```

<div class="demo">
  <div class="demo-item-accordion">
    <details style="border:3px solid black;background:#fff;padding:8px 12px;min-width:300px; max-width: 300px;text-align:left;">
      <summary style="cursor:pointer;font-weight:bold;">Try me 👀</summary>
      <p style="margin:8px 0 0;font-size:13px;">No JavaScript was harmed in the making of this accordion.</p>
    </details>
  </div>
</div>

## Exclusive accordions with `name`

If you have several accordions with the same `name` and the browser closes the others when one opens — the classic "only one panel at a time" pattern, still no JS:

```html
<details name="faq">
  <summary>Question one</summary>
  <p>Answer one.</p>
</details>
<details name="faq">
  <summary>Question two</summary>
  <p>Opening me closes question one.</p>
</details>
```


<div class="demo">
  <div class="demo-item-accordion">
    <details name="faq" style="border:3px solid black;background:#fff;padding:8px 12px;min-width:300px; max-width: 300px;text-align:left;">
      <summary style="cursor:pointer;font-weight:bold;">Question one</summary>
      <p style="margin:8px 0 0;font-size:13px;">No JavaScript was harmed in the making of this accordion.</p>
    </details>
    <details name="faq" style="border:3px solid black;background:#fff;padding:8px 12px;min-width:300px; max-width: 300px;text-align:left;">
      <summary style="cursor:pointer;font-weight:bold;">Question Two</summary>
      <p style="margin:8px 0 0;font-size:13px;">No JavaScript was harmed in the making of this accordion either.</p>
    </details>
  </div>
</div>


## Bonus tricks

- `<details open>` renders expanded by default.
- The `toggle` event fires when it opens/closes, if you *do* want to hook in JS.
- Browsers can search text inside closed `<details>` with Ctrl+F and auto-expand the match (`hidden="until-found"` territory).

## Resources

- [MDN — &lt;details&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN — &lt;summary&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
- [Chrome for Developers — exclusive accordions](https://developer.chrome.com/docs/css-ui/exclusive-accordion)
- [Can I use — details name attribute](https://caniuse.com/mdn-html_elements_details_name)
