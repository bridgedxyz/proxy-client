# disable github star button since it can confuse users. in `GitHubStarButton.vue`

```html
<template>
  <transition name="fade" appear>
    <!-- X-OVERRIDE -->
    <!-- <GithubButton
      title="Star Hoppscotch"
      href="https://github.com/hoppscotch/hoppscotch"
      :data-color-scheme="
        colorMode.value != 'light'
          ? colorMode.value == 'black'
            ? 'dark'
            : 'dark_dimmed'
          : 'light'
      "
      :data-show-count="true"
      data-text="Star"
      aria-label="Star Hoppscotch on GitHub"
      :data-size="size"
    /> -->
  </transition>
</template>
```
