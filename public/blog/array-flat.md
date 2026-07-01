Got a nested array you want to smoosh into one level? `Array.flat()` handles it
without a single `reduce`.

```javascript
const nested = [1, [2, [3, [4]]]];

nested.flat();          // [1, 2, [3, [4]]]
nested.flat(2);         // [1, 2, 3, [4]]
nested.flat(Infinity);  // [1, 2, 3, 4]
```

The argument is the **depth** to flatten — it defaults to `1`. Pass `Infinity`
when you want to flatten all the way down.

## flatMap: map + flatten in one pass

If you're mapping and then flattening one level, `flatMap` is tidier and faster:

```javascript
const words = ['hello world', 'foo bar'];

words.flatMap((s) => s.split(' '));
// ['hello', 'world', 'foo', 'bar']
```

> `flat()` also removes empty slots in sparse arrays — a handy side effect.
