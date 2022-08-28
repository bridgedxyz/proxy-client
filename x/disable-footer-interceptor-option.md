# in `Footer.vue`

```tsx
<tippy
  ref="interceptorOptions"
  class="x-override-disable"
  interactive
  trigger="click"
  theme="popover"
  arrow
>
  <template #trigger>
    <ButtonSecondary
      v-tippy="{ theme: 'tooltip' }"
      :title="t('settings.interceptor')"
      svg="shield-check"
    />
  </template>
  <AppInterceptor />
</tippy>
```
