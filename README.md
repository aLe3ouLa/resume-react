<div align="center">

# Alexandra Barka · Portfolio

<p>
  <em>Senior product engineer, photographer, writer, and maker, based in Amsterdam.</em>
</p>

<p>
  <a href="https://ale3oula.github.io/"><img src="https://img.shields.io/badge/Live%20Site-ale3oula.github.io-1a1a1a?style=for-the-badge&labelColor=fff9e6" alt="Live site" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-latest-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TanStack%20Router-1.170-FF4154?logo=react-router&logoColor=white" alt="TanStack Router" />
  <img src="https://img.shields.io/badge/Three.js-0.185-000000?logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-deployed-222222?logo=github&logoColor=white" alt="GitHub Pages" />
</p>

</div>

---

## ✦ About

This repository is the source for [Alexandra Barka's personal portfolio](https://ale3oula.github.io/). It combines professional experience with photography, articles, and creative work.

The visual language leans into solid colors, bold outlines, and tactile shadows rather than gradients or continuous decorative motion. Every interactive element, including the 3D scene, stays keyboard and screen reader accessible.

## ✦ Highlights

<table>
<tr>
<td width="50%" valign="top">

#### 🧑‍💻 Editorial homepage
Hero introduction, an About Me section with curated notes, and a capability focused engineer's workbench.

</td>
<td width="50%" valign="top">

#### 🕰 Expandable career timeline
Work history rendered from a single source of truth, with details that expand in place.

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### 🪑 Procedural 3D maker's desk
A low-poly scene built with Three.js, generated entirely in the browser with no external model or texture files. An accessible HTML menu mirrors every selectable object.

</td>
<td width="50%" valign="top">

#### 📸 Photography gallery
A curated set of portraits and wildlife photography, organized as a homepage section.

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### ✍️ Markdown powered blog
"Tidbits", a technical blog rendered from Markdown with syntax highlighted code via Markdown-It and Highlight.js.

</td>
<td width="50%" valign="top">

#### 🧪 Side projects showcase
A dedicated page highlighting independent builds, each with its own stack and link.

</td>
</tr>
</table>

## ✦ Tech stack

<table>
<tr>
<td valign="top">

**Core**
- React 19
- TypeScript
- Vite
- TanStack Router
- Three.js
- CSS Modules

</td>
<td valign="top">

**Content**
- Markdown-It
- Highlight.js
- Downloadable resume (PDF)

</td>
<td valign="top">

**Deployment**
- GitHub Pages
- gh-pages CLI

</td>
</tr>
</table>

## ✦ Getting started

### Requirements

- Node.js
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local dev server URL (defaults to [http://localhost:5173](http://localhost:5173)).

### Type checking

```bash
npx tsc -b
```

Plain `tsc --noEmit -p .` is not sufficient here. The root `tsconfig.json` only references the app and node sub-projects, so it type-checks nothing on its own. `tsc -b`, which `npm run build` also runs, follows those references and actually checks the code.

### Production build

```bash
npm run build
```

The optimized application is written to `dist/`.

### Preview a production build

```bash
npm run preview
```

## ✦ Project structure

<details>
<summary><strong>Click to expand</strong></summary>

```text
src/
├── assets/                   Images, photography, and resume PDF
├── components/
│   ├── Layout/                Shared header, nav, and footer (wraps every route)
│   ├── MakerDesk/              Three.js scene and accessible controls
│   └── WorkExperience/         Career timeline
├── data/                      Blog post metadata
├── pages/                      Route-level components (Home, Blog, BlogPost, Products, NotFound)
├── utils/                      Markdown rendering utilities
├── router.tsx                  TanStack Router route tree and router instance
├── App.tsx                     Renders the RouterProvider
├── App.module.css              Shared homepage/layout styles
└── global.css                  Global styling and font imports
```

</details>

## ✦ Routes

| Route | Content |
| --- | --- |
| `/` | Portfolio homepage (hero, about, workbench, work experience, maker's desk, photography) |
| `/blog` | Technical articles ("Tidbits") |
| `/blog/$slug` | Individual Markdown article |
| `/products` | Side projects showcase |
| `*` | Not found page |

Photography and work experience are homepage sections (`#photography`, `#work`), not separate routes.

## ✦ Content updates

<table>
<tr>
<td valign="top">

**Work experience**

Entries live in `src/components/WorkExperience/WorkExperience.tsx`.

</td>
<td valign="top">

**Blog posts**

1. Add the Markdown file to `public/blog/`.
2. Add its metadata to `src/data/blogPosts.ts`.

</td>
</tr>
<tr>
<td valign="top">

**Photography**

Assets live under `src/assets/photography/`, `src/assets/portraits/`, and `src/assets/wildlife/`.

</td>
<td valign="top">

**Resume**

Replace `src/assets/cv.pdf` while keeping the same filename, or update the import in `src/pages/Home.tsx`.

</td>
</tr>
</table>

## ✦ The 3D maker's desk

The scene is defined in `src/components/MakerDesk/MakerDesk.tsx`. Each desk object is assembled from lightweight Three.js primitives with solid-color materials and outlined geometry.

To add another object:

1. Add its metadata to `deskItems`.
2. Create a named `THREE.Group` in `createDeskScene`.
3. Set `group.userData.itemId` to the metadata ID.
4. Add the group to the scene, and give it a padded hit area with `addHitArea`.

Mouse selection uses raycasting, with an invisible padded hit box per object so clicking near an item (not just exactly on it) still selects it. Keyboard and assistive technology access is provided by the HTML object menu below the canvas.

## ✦ Deployment

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

## ✦ Accessibility

- Interactive elements remain keyboard accessible.
- The 3D scene has equivalent HTML controls.
- Semantic headings organize each section.
- Images include alternative text.

## ✦ License

The source code is provided for reference. Photography, writing, personal information, and visual assets remain the property of Alexandra Barka and may not be reused without permission.

<div align="center">
<br />
<sub>Built with React, TypeScript, and Three.js in Amsterdam.</sub>
</div>
</content>
