# in `Sidenav.vue` - the Doc is disabled

```ts
const primaryNavigation = [
  {
    target: "index",
    svg: "link-2",
    title: t("navigation.rest"),
    exact: true,
  },
  {
    target: "graphql",
    svg: "graphql",
    title: t("navigation.graphql"),
    exact: false,
  },
  {
    target: "realtime",
    svg: "globe",
    title: t("navigation.realtime"),
    exact: false,
  },
  // X-OVERRIDE
  // {
  //   target: "documentation",
  //   svg: "book-open",
  //   title: t("navigation.doc"),
  //   exact: false,
  // },
  {
    target: "settings",
    svg: "settings",
    title: t("navigation.settings"),
    exact: false,
  },
]
```
