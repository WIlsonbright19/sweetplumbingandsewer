# Sweet Plumbing & Sewer

A bilingual plumbing and sewer service website for North Miami Beach and Miami-Dade County.

## Develop locally

Prerequisite: Node.js 20.19 or newer.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy the contents of that folder to any static web host. For a hosting provider with a build pipeline, use `npm install` as the install command, `npm run build` as the build command, and `dist` as the publish directory.

The build uses relative asset paths, so it can also be served from a subdirectory rather than only from a domain root.
