![Tree shaking lifecycle](/blog/tree-shaking.png)

# 🌳 Tree Shaking: Why Are You Shipping the Whole Forest?

Imagine you're going on a weekend trip. You open your wardrobe and think:

> "I might need everything."

So you pack:

* 👕 12 t-shirts
* 👖 8 pairs of jeans
* 🧥 4 jackets
* 👢 Winter boots
* 🏖️ Flip-flops
* 🎿 Ski goggles

Your suitcase weighs 40 kg.

Your smarter friend looks at your destination and says:

> "You're going to Barcelona in July. Why are you bringing ski goggles?"

They remove everything useless. Now your suitcase weighs 8 kg.

That's exactly what **tree shaking** does.

## 🌲 Your JavaScript is the Suitcase

Let's say your utility file looks like this:

```javascript
export const formatDate = () => {};
export const formatCurrency = () => {};
export const calculateTax = () => {};
export const generatePDF = () => {};
export const printInvoice = () => {};
```

Your application only imports one function:

```javascript
import { formatDate } from "./utils";
```

Without optimization, a bundler could include **everything** from `utils.js`.

That means users may download, parse, and execute code your application never calls. One unused helper is tiny, but unused code spread across a large application and its dependencies can add up quickly.

## ✂️ Tree Shaking to the Rescue

Modern bundlers like **Vite**, **Webpack**, **Rollup**, and **esbuild** analyze your imports.

If only one export is used...

```javascript
import { formatDate } from "./utils";
```

...the final bundle becomes roughly:

```javascript
const formatDate = () => {};
```

The original source file is not changed. Tree shaking only affects the optimized output created by the bundler, so all of the exports remain available while you develop the application.

## 🕵️ How Does the Bundler Know?

Tree shaking works because **ES modules are statically analyzable**. Their imports and exports use a predictable syntax that bundlers can inspect before running the code.

```javascript
import { formatDate } from "./utils";
```

The bundler knows exactly:

* what is imported
* what is never imported
* what can safely disappear

This analysis happens before the application runs. Because the import and export names are visible in the source code, the bundler can build a graph of which modules depend on each other and which exports are actually reachable from the application's entry points.

This is different from code that decides what to load while it is running. The more dynamic the module pattern is, the harder it becomes for a bundler to prove that a piece of code is unused.


## ⚠️ But Wait... Side Effects

Not every file can be removed safely.

Imagine this module:

```javascript
console.log("Analytics started");

export const track = () => {};
```

Even if you import `track` but never call it, loading this module still runs:

```javascript
console.log(...)
```

That changes your application's behavior.

Because of this, bundlers preserve code they detect—or are told—may have **side effects**. Package metadata such as the `"sideEffects"` field can help bundlers decide what is safe to remove.

Side effects are not limited to logging. A module might modify a global variable, register an event listener, load CSS, install a polyfill, or connect to an external service as soon as it is imported.

For example:

```javascript
window.addEventListener("online", updateConnectionStatus);
```

Removing that line would change the application even if the module's exported functions were never used.

In other words:

> If removing code could change what happens when the app starts, it stays.

---

## ✅ Named Exports Help

Named exports make it clear which parts of a module are being used.

```javascript
export const Button = () => {};
export const Modal = () => {};
export const Tooltip = () => {};
```

Then you can import only what you need:

```javascript
import { Button } from "./components";
```

Default exports can also be tree-shaken, but named exports often make the relationship between imports and exports easier to understand.

Named exports are especially useful in utility and component libraries because consumers can see exactly what they are requesting:

```javascript
import { Button, Tooltip } from "./components";
```

However, changing every default export to a named export does not automatically make a bundle smaller. The module format, bundler configuration, side effects, and the way a package is published all matter too.


## ❌ Barrel Files Can Hurt

Sometimes developers write:

```javascript
export * from "./Button";
export * from "./Modal";
export * from "./Tooltip";
```

Barrel files aren't automatically bad, but depending on your tooling and how they're structured, they can cause extra modules to be evaluated or make side effects harder to identify. That can make tree shaking less effective.

They are convenient because callers get one clean import path:

```javascript
import { Button } from "./components";
```

But that barrel may reference dozens of modules behind the scenes. A modern bundler can often remove the unused ones, but modules with side effects—or packages compiled into a less analyzable format—may still reach the final bundle. For performance-sensitive code, importing directly can sometimes be safer:

```javascript
import { Button } from "./components/Button";
```

The best way to know whether a barrel causes a problem is to inspect the production bundle instead of assuming that it does.


## 🎮 Mini Challenge

Given this module:

```javascript
export const add = () => {};
export const subtract = () => {};
export const multiply = () => {};
export const divide = () => {};
```

Your app imports and uses two functions:

```javascript
import { add, divide } from "./math";

const total = add(10, 5);
const average = divide(total, 2);
```

🤔 Assuming a production build and no relevant side effects, which functions will end up in the final bundle?

<details>
<summary>Answer</summary>

Only:

* ✅ add
* ✅ divide

The bundler removes:

* ❌ subtract
* ❌ multiply

Both called functions are considered reachable from the application. The other exports have no path from an entry point, so the bundler can leave them out of the optimized output. If a function were imported but never used, a bundler could remove that import too.

</details>

---

## 📦 Production Builds and Module Formats

Tree shaking is normally performed during a production build, when the bundler optimizes the application for deployment.

Development builds usually prioritize fast startup, quick rebuilds, and useful debugging information. Production builds can spend more time analyzing modules, removing unreachable code, and minifying the result.

It works most reliably when ES module syntax is preserved:

```javascript
import { formatDate } from "./utils";
export { formatDate };
```

Older CommonJS patterns such as `require()` and `module.exports` are more dynamic, so bundlers may not be able to determine as precisely which code is unused.

For example, a CommonJS module can choose an import at runtime:

```javascript
const helpers = require(`./helpers/${environment}`);
```

Because the value of `environment` may not be known during the build, the bundler has less certainty about which file will be needed.

Tree shaking and minification are also different steps. Tree shaking removes code that is not reachable; minification rewrites the code that remains so it takes fewer bytes. Production bundlers commonly do both.


## 🚀 Why Should You Care?

Smaller bundles mean:

* ⚡ Faster downloads
* 📱 Better performance on slow networks
* 🔋 Less JavaScript to parse and execute
* 😊 Happier users

All because your bundler packed only what your application actually needed.

You can confirm the result with a bundle analyzer or by inspecting the generated files. Measuring matters: an import that looks expensive in the source code may already be optimized, while an innocent-looking dependency can sometimes bring much more code than expected.
