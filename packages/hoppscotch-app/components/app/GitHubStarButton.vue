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

<script setup lang="ts">
import GithubButton from "vue-github-button"
import { useColorMode } from "~/helpers/utils/composables"

const colorMode = useColorMode()

defineProps({
  size: {
    type: String,
    default: undefined,
  },
})
</script>
