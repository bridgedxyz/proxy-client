# `nuxt.config.js` overrides

## `options`

```js
// Common options

// Common options
export const options = {
  // X-OVERRIDE
  name: "Playground",
  // X-OVERRIDE
  shortDescription: "cors.sh playground",
  // X-OVERRIDE
  description: "Test your blocked api here, cors freely.",
  // X-OVERRIDE
  keywords:
    "hoppscotch, cors, cors proxy, cors.sh, free cors proxy, cors.bridged, cors bridged, cors.bridged.cc, api, request, testing, tool, rest, websocket, sse, graphql, socketio",
  loading: {
    color: "var(--divider-dark-color)",
    background: "var(--primary-color)",
    accent: "var(--accent-color)",
  },
  app: {
    background: "#202124",
  },
  social: {
    // X-OVERRIDE
    twitter: "@grida_co",
  },
}
```

## `router#base`

```js
export default {
  // ...
  router: {
    linkActiveClass: "active-link",
    linkExactActiveClass: "exact-active-link",
    // X-OVERRIDE
    base: process.env.BASE_PATH,
  },
  // ...
}
```
