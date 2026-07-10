Got a nested array you want to smoosh into one level? `Array.flat()` handles it without a single `reduce`.

The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
const nested = [1, [2, [3, [4]]]];

nested.flat();          // [1, 2, [3, [4]]]
nested.flat(2);         // [1, 2, 3, [4]]
nested.flat(Infinity);  // [1, 2, 3, 4]
```

The argument is the **depth** to flatten — it defaults to `1`. Pass `Infinity` when you want to flatten all the way down.

The `flat()` method is a copying method. It does not alter `this` but instead returns a shallow copy of the original array elements.

## flat() on non-array thingies

`flat()` only unwraps elements that are actually arrays. Anything else — numbers,
strings, objects, `null`, even nested objects that happen to hold arrays are just copied.

```javascript
const mixed = [1, ['two', 3], { list: [4, 5] }, [null, [6]]];

mixed.flat();
// [1, 'two', 3, { list: [4, 5] }, null, [6]]
```


## flatMap: map + flatten in one pass

If you're mapping and then flattening one level, `flatMap` is tidier and faster:

```javascript
const words = ['hello world', 'foo bar'];

words.flatMap((s) => s.split(' '));
// ['hello', 'world', 'foo', 'bar']
```

> `flat()` also removes empty slots in sparse arrays — a handy side effect.
