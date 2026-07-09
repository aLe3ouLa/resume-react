Got an array you want to filter without creating a messy `for` loop? `Array.filter()` handles it with a clean callback.

The `filter()` method creates a new array containing only the elements that pass a test function.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

numbers.filter((n) => n % 2 === 0);
// [2, 4, 6]
```

The callback receives three arguments:

```javascript
array.filter((element, index, originalArray) => {
  // return true to keep the element
});
```

Return `true` → keep the item.
Return `false` → remove it.

The original array stays untouched:

```javascript
const users = ['Alex', 'Bob', 'Anna'];

const result = users.filter((user) => user.startsWith('A'));

console.log(result);
// ['Alex', 'Anna']

console.log(users);
// ['Alex', 'Bob', 'Anna']
```

## filter() is not just for removing things

It is often used for creating subsets of data:

```javascript
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 80 }
];

products.filter((product) => product.price > 100);
// [
//   { name: 'Laptop', price: 1200 }
// ]
```

## The empty array trap

If nothing matches, `filter()` does not return `null` or `undefined`.

It returns an empty array:

```javascript
[1, 2, 3].filter((n) => n > 10);
// []
```

This means you can safely chain methods:

```javascript
users
  .filter((user) => user.active)
  .map((user) => user.name);
```

No `if` statements. No temporary variables. Just a pipeline of transformations.

> `filter()` is a non-mutating method — it creates a new array instead of changing the original one.
