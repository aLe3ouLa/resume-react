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
    //     {
//         slug: 'array-flat',
//         title: 'Array.flat()',
//         date: '2026-06-18',
//         tags: ['JavaScript', 'Arrays'],
//         excerpt: 'Flatten nested arrays with one call — no reduce gymnastics.',
//         language: 'javascript',
//         snippet: `const nested = [1, [2, [3, [4]]]];

// nested.flat();       // [1, 2, [3, [4]]]
// nested.flat(Infinity); // [1, 2, 3, 4]`,
//     },
    {
        slug: 'optional-chaining',
        title: 'Optional Chaining',
        date: '2026-06-24',
        tags: ['JavaScript', 'ES2020'],
        excerpt:
            'Safely read deeply nested values without a pile of &&.',
        language: 'javascript',
        snippet: `// Before 😬
const city = user && user.address && user.address.city;

// After ✨
const city = user?.address?.city;`,
    },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
    BLOG_POSTS.find((post) => post.slug === slug);
