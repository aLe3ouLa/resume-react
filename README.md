# Alexandra Barka’s portfolio

Personal portfolio for Alexandra Barka, a senior product engineer, photographer, writer, and maker based in Amsterdam.

**Live site:** [ale3oula.github.io](https://ale3oula.github.io/)

The site combines professional experience with photography, articles, and creative work. Its visual language uses solid colors, bold outlines, tactile shadows, and restrained interaction. It does not use gradients or continuous decorative motion.

## Highlights

- Editorial hero and personal introduction
- About Me section with curated notes
- Capability-focused engineer’s workbench
- Expandable career timeline
- Interactive low-poly 3D maker’s desk built with Three.js
- Photography gallery
- Markdown-powered technical blog ("Tidbits") with syntax-highlighted code
- Downloadable résumé
- Responsive layouts

## Technology

- React 19
- TypeScript
- Vite
- React Router
- Three.js
- CSS Modules
- Markdown-It and Highlight.js
- GitHub Pages

The 3D maker’s desk is generated procedurally in the browser. It does not depend on external model files or textures. An accessible HTML object menu mirrors every selectable object in the WebGL scene.

## Getting started

### Requirements

- Node.js
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite prints the local dev server URL (defaults to [http://localhost:5173](http://localhost:5173)).

### Type checking

```bash
npx tsc -b
```

Plain `tsc --noEmit -p .` is not sufficient here — the root `tsconfig.json` only references the app and node sub-projects, so it type-checks nothing on its own. `tsc -b` (which `npm run build` also runs) follows those references and actually checks the code.

### Production build

```bash
npm run build
```

The optimized application is written to `dist/`.

### Preview a production build

```bash
npm run preview
```

## Project structure

```text
src/
├── assets/                 Images, photography, and résumé PDF
├── components/
│   ├── Layout/              Shared header, nav, and footer (wraps every route)
│   ├── MakerDesk/            Three.js scene and accessible controls
│   └── WorkExperience/       Career timeline
├── data/                    Blog post metadata
├── pages/                    Route-level components (Home, Blog, BlogPost, NotFound)
├── utils/                    Markdown rendering utilities
├── App.tsx                   Router configuration
├── App.module.css            Shared homepage/layout styles
└── global.css                Global styling and font imports
```

## Main routes

| Route | Content |
| --- | --- |
| `/` | Portfolio homepage (hero, about, workbench, work experience, maker's desk, photography) |
| `/blog` | Technical articles ("Tidbits") |
| `/blog/:slug` | Individual Markdown article |
| `*` | Not found page |

Photography and work experience are homepage sections (`#photography`, `#work`), not separate routes.

## Content updates

### Work experience

Entries live in:

```text
src/components/WorkExperience/WorkExperience.tsx
```

### Blog posts

1. Add the Markdown file to `public/blog/`.
2. Add its metadata to `src/data/blogPosts.ts`.

### Photography

Photography assets are organized under:

```text
src/assets/photography/
src/assets/portraits/
src/assets/wildlife/
```

### Résumé

Replace `src/assets/cv.pdf` while keeping the same filename, or update the import in `src/pages/Home.tsx`.

## 3D maker’s desk

The scene is defined in:

```text
src/components/MakerDesk/MakerDesk.tsx
```

Each desk object is assembled from lightweight Three.js primitives with solid-color materials and outlined geometry. To add another object:

1. Add its metadata to `deskItems`.
2. Create a named `THREE.Group` in `createDeskScene`.
3. Set `group.userData.itemId` to the metadata ID.
4. Add the group to the scene, and give it a padded hit area with `addHitArea`.

Mouse selection uses raycasting, with an invisible padded hit box per object so clicking near an item (not just exactly on it) still selects it. Keyboard and assistive-technology access is provided by the HTML object menu below the canvas.

## Deployment

The portfolio is published to the `master` branch of the separate `aLe3ouLa/aLe3ouLa.github.io` repository.

```bash
npm run deploy
```

This builds the application and publishes the contents of `dist/` with `gh-pages`.

To publish an already verified build without rebuilding:

```bash
npx gh-pages -b master \
  -r https://github.com/aLe3ouLa/aLe3ouLa.github.io.git \
  -d dist --dotfiles
```

Always confirm that `dist/index.html` contains the application before using the direct command.

## Accessibility

- Interactive elements remain keyboard accessible.
- The 3D scene has equivalent HTML controls.
- Semantic headings organize each section.
- Images include alternative text.

## License

The source code is provided for reference. Photography, writing, personal information, and visual assets remain the property of Alexandra Barka and may not be reused without permission.
