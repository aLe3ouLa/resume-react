Long ago, in a galaxy far away, accessing nested objects used to mean stacking up `&&` checks so you didn't get an `undefined` value. **Optional chaining** (`?.`) does that for you.

```javascript
// Before 🏴‍☠️
const treasure = dungeon && dungeon.ironChest && dungeon.ironChest.contents && dungeon.ironChest.contents.gold ;

// After 🪙
const treasure = dungeon?.ironChest?.contents?.gold;
```

If any part of the chain is `null` or `undefined`, the whole expression
short-circuits to an `undefined` value.

## It works on function calls and indexes!

```javascript
user?.getName?.();     // only call if getName function exists
user?.friends?.[0];    // safe dynamic access in an array's cell
```

## Tip: Pair it with nullish coalescing (??)

Combine `?.` with `??` to supply a fallback value:

```javascript
const city = user?.address?.city ?? 'Unknown';
```

> ⚠️: `?.` guards `null`/`undefined`, not other falsy values like `0` or `''`. 
> That's why `??` is a very good companion.

## Resources

- [MDN — Optional chaining (`?.`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN — Nullish coalescing (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [TC39 — Optional Chaining proposal](https://github.com/tc39/proposal-optional-chaining)
- [Can I use — Optional chaining](https://caniuse.com/mdn-javascript_operators_optional_chaining)

