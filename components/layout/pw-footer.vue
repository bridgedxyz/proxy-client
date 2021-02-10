<template>
  <footer class="footer">
    <div class="row-wrapper">
      <span class="flex flex-col font-mono md:flex-row" style="align-items: start">
        <a class="footer-link" href="https://hoppscotch.io/" target="_blank" rel="noopener">
          Powered by Hoppscotch
        </a>
        <span class="footer-link">CORS middleware served by Bridged</span>
        <a class="footer-link" href="https://github.com/Rob--W/cors-anywhere/" target="_blank" rel="noopener">Middleware Library CORS anywhere</a>
      </span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-link {
  @apply inline-flex;
  @apply flex-shrink-0;
  @apply my-2;
  @apply mx-4;
  @apply text-fgLightColor;

  &:hover {
    @apply text-fgColor;
  }
}
</style>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(({ code }) => code !== this.$i18n.locale)
    },
  },
}
</script>
