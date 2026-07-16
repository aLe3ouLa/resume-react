export interface BlogPost {
    slug: string;
    title: string;
    date: string; // ISO date, e.g. '2026-06-20'
    tags: string[];
    excerpt: string;
    // Short code preview shown on the tidbit card.
    snippet: string;
    language: string;
}

// Newest first — this order drives the /blog grid and prerendering.
export const BLOG_POSTS: BlogPost[] = [
    {
    slug: 'tree-shaking',
    title: 'Tree Shaking',
    date: '2026-07-16',
    tags: ['JavaScript', 'Bundling', 'Performance'],
    excerpt:
        'Learn how bundlers remove unused JavaScript and why side effects and module formats matter.',
    language: 'javascript',
    snippet: `import { formatDate } from './utils';
// Unused exports are removed
// from the production bundle.`,
},
    {
        slug: 'css-specificity',
        title: 'CSS Specificity',
        date: '2026-07-15',
        tags: ['CSS', 'Selectors', 'Cascade'],
        excerpt:
            'Learn how browsers compare selectors and decide which CSS declaration wins.',
        language: 'css',
        snippet: `#checkout .button:hover { /* 1-2-0 */ }
.card button            { /* 0-1-1 */ }
button                   { /* 0-0-1 */ }`,
    },
    {
        slug: 'a11y-focus-management',
        title: 'Accessible Focus Management',
        date: '2026-07-10',
        tags: ['Accessibility', 'HTML', 'ARIA'],
        excerpt:
            'Managing focus correctly keeps keyboard and screen reader users oriented.',
        language: 'html',
        snippet: `<dialog open>
  <h2>Confirm deletion</h2>
  <button>Delete</button>
</dialog>`,
    },
    {
        slug: 'a11y-form-error',
        title: 'Accessible Form Errors',
        date: '2026-07-09',
        tags: ['Accessibility', 'HTML', 'ARIA'],
        excerpt:
            'Make validation errors understandable for everyone. Not just visible users.',
        language: 'html',
        snippet: `<input aria-invalid="true" aria-describedby="email-error" />
<p id="email-error">
    Enter a valid email address.
</p>`,
    },
    {
        slug: 'array-flat',
        title: 'Array.flat()',
        date: '2026-07-06',
        tags: ['JavaScript', 'Arrays'],
        excerpt: 'Flatten nested arrays with one call — no reduce gymnastics.',
        language: 'javascript',
        snippet: `const nested = [1, [2, [3, [4]]]];
nested.flat();
// [1, 2, [3, [4]]]`,
    },
    {
        slug: 'html-details-summary',
        title: '<details> and <summary>',
        date: '2026-07-03',
        tags: ['HTML', 'Accessibility'],
        excerpt: 'A real accordion built into the browser. No library.',
        language: 'html',
        snippet: `<details>
  <summary>Is this really built in?</summary>
  <p>Yep. Click or press Enter/Space to toggle.</p>
</details>`,
    },
    {
        slug: 'css-drop-shadow',
        title: 'filter: drop-shadow()',
        date: '2026-07-02',
        tags: ['CSS', 'Filters'],
        excerpt:
            'box-shadow only knows rectangles. drop-shadow follows the actual shape of your element.',
        language: 'css',
        snippet: `/* shadow hugs the real shape, not the box */
.icon { filter: drop-shadow(4px 4px 8px crimson); }

filter:
  drop-shadow(1px 1px 0 navy);`,
    },
    {
        slug: 'optional-chaining',
        title: 'Optional Chaining',
        date: '2026-06-30',
        tags: ['JavaScript', 'ES2020'],
        excerpt: 'Safely read deeply nested values without a pile of &&.',
        language: 'javascript',
        snippet: `// Before 😬
const city = user && user.address && user.address.city;

// After ✨
const city = user?.address?.city;`,
    },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
    BLOG_POSTS.find((post) => post.slug === slug);
