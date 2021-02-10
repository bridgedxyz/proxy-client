<template>
  <aside class="nav-first">
    <nav class="primary-nav">
      <!--
        We're using manual checks for linkActive because the query string
        seems to mess up the nuxt-link active class.
      -->
      <nuxt-link
        :to="localePath('index')"
        :class="linkActive('/')"
        v-tooltip.right="$t('home')"
        :aria-label="$t('home')"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.8293 6.93437L13.7899 14.1445L20.7637 20.9606V13.7505L20.7626 13.7494C20.699 9.97472 17.6192 6.93435 13.8293 6.93433C13.8293 6.93433 13.8293 6.93433 13.8293 6.93433L13.8293 6.93437Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.01 3.58933C9.54739 3.97687 6.85553 6.91422 6.85553 10.4803V13.7899L6.97373 21L0 14.1839V6.93433V6.89493L0.000108968 6.89504C0.0212562 3.0834 3.11771 0 6.93433 0C9.55113 0 11.8294 1.44947 13.01 3.58933Z"
            fill="black"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        :to="localePath('doc')"
        :class="linkActive('/doc')"
        v-tooltip.right="$t('documentation')"
        :aria-label="$t('documentation')"
      >
        <i class="material-icons">topic</i>
      </nuxt-link>
      <nuxt-link
        :to="localePath('settings')"
        :class="linkActive('/settings')"
        v-tooltip.right="$t('settings')"
        :aria-label="$t('settings')"
      >
        <i class="material-icons">settings</i>
      </nuxt-link>
    </nav>
    <div v-if="$route.path == '/'">
      <nav class="secondary-nav">
        <ul>
          <li>
            <a href="#request" v-tooltip.right="$t('request')">
              <i class="material-icons">cloud_upload</i>
            </a>
          </li>
          <li>
            <a href="#options" v-tooltip.right="$t('options')">
              <i class="material-icons">toc</i>
            </a>
          </li>
          <li>
            <a href="#response" v-tooltip.right="$t('response')">
              <i class="material-icons">cloud_download</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else-if="$route.path.includes('/realtime')">
      <nav class="secondary-nav">
        <ul>
          <li>
            <a href="#request" v-tooltip.right="$t('request')">
              <i class="material-icons">cloud_upload</i>
            </a>
          </li>
          <li>
            <a href="#response" v-tooltip.right="$t('communication')">
              <i class="material-icons">cloud_download</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else-if="$route.path.includes('/graphql')">
      <nav class="secondary-nav">
        <ul>
          <li>
            <a href="#endpoint" v-tooltip.right="$t('endpoint')">
              <i class="material-icons">cloud</i>
            </a>
          </li>
          <li>
            <a href="#schema" v-tooltip.right="$t('schema')">
              <i class="material-icons">assignment_returned</i>
            </a>
          </li>
          <li>
            <a href="#query" v-tooltip.right="$t('query')">
              <i class="material-icons">cloud_upload</i>
            </a>
          </li>
          <li>
            <a href="#response" v-tooltip.right="$t('response')">
              <i class="material-icons">cloud_download</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else-if="$route.path.includes('/doc')">
      <nav class="secondary-nav">
        <ul>
          <li>
            <a href="#import" v-tooltip.right="$t('import')">
              <i class="material-icons">folder</i>
            </a>
          </li>
          <li>
            <a href="#documentation" v-tooltip.right="$t('documentation')">
              <i class="material-icons">insert_drive_file</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else-if="$route.path.includes('/settings')">
      <nav class="secondary-nav">
        <ul>
          <li>
            <a href="#account" v-tooltip.right="$t('account')">
              <i class="material-icons">person</i>
            </a>
          </li>
          <li>
            <a href="#theme" v-tooltip.right="$t('theme')">
              <i class="material-icons">brush</i>
            </a>
          </li>
          <li>
            <a href="#extensions" v-tooltip.right="$t('extensions')">
              <i class="material-icons">extensions</i>
            </a>
          </li>
          <li>
            <a href="#proxy" v-tooltip.right="$t('proxy')">
              <i class="material-icons">public</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped lang="scss">
$responsiveWidth: 768px;

.nav-first {
  @apply z-10;
  @apply h-screen;
  @apply p-2;
  @apply bg-bgDarkColor;
  @apply transition;
  @apply ease-in-out;
  @apply duration-150;
  // @apply overflow-y-auto;
}

nav.primary-nav {
  @apply flex;
  @apply flex-col;
  @apply flex-no-wrap;
  @apply items-center;
  @apply justify-center;
  @apply space-y-2;

  svg {
    @apply fill-current;
  }

  a {
    @apply inline-flex;
    @apply items-center;
    @apply justify-center;
    @apply flex-shrink-0;
    @apply p-4;
    @apply rounded-full;
    @apply bg-bgLightColor;
    @apply text-fgLightColor;
    @apply fill-current;
    @apply outline-none;
    @apply transition;
    @apply ease-in-out;
    @apply duration-150;

    &:hover {
      @apply text-fgColor;
      @apply fill-current;

      svg {
        @apply fill-current;
      }
    }

    &.nuxt-link-exact-active {
      background-color: #fff;
      @apply text-actColor;
      @apply fill-current;

      border-radius: 16px;

      svg {
        @apply fill-current;
      }
    }
  }
}

nav.primary-nav::-webkit-scrollbar,
.nav-first::-webkit-scrollbar {
  @apply hidden;
}

nav.secondary-nav {
  @apply flex;
  @apply flex-col;
  @apply flex-no-wrap;
  @apply items-center;
  @apply justify-center;
  @apply border-t-2;
  @apply border-dashed;
  @apply border-brdColor;
  @apply mt-2;

  ul {
    @apply flex;
    @apply flex-col;
    @apply flex-no-wrap;
    @apply space-y-2;
    @apply py-1;

    li {
      @apply flex;

      a {
        @apply p-4;
        @apply rounded-full;
        @apply bg-bgDarkColor;
        @apply text-fgLightColor;
        @apply fill-current;
        @apply outline-none;
        @apply transition;
        @apply ease-in-out;
        @apply duration-150;

        &:hover {
          @apply text-fgColor;
          @apply fill-current;
        }

        &.current {
          @apply text-acColor;
          @apply fill-current;
        }
      }
    }
  }
}

@media (max-width: $responsiveWidth) {
  .nav-first {
    @apply fixed;
    @apply top-auto;
    @apply bottom-0;
    @apply h-auto;
    @apply p-0;
    @apply w-full;
    @apply bg-bgColor;
    @apply shadow-2xl;
  }

  nav.primary-nav {
    @apply flex-row;
    @apply flex-no-wrap;
    @apply overflow-auto;
    @apply justify-between;
    @apply bg-bgDarkColor;
    @apply space-y-0;

    padding-bottom: env(safe-area-inset-bottom);

    a {
      @apply bg-transparent;
      @apply m-2;
      @apply flex-1;

      &.nuxt-link-exact-active {
        @apply bg-transparent;
        @apply text-acColor;
        @apply fill-current;

        svg {
          @apply fill-current;
        }
      }
    }
  }

  nav.secondary-nav {
    @apply hidden;
  }
}
</style>

<script>
export default {
  methods: {
    linkActive(path) {
      return {
        "nuxt-link-exact-active": this.$route.path === path,
        "nuxt-link-active": this.$route.path === path,
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", (event) => {
      let mainNavLinks = document.querySelectorAll("nav ul li a")
      let fromTop = window.scrollY
      mainNavLinks.forEach(({ hash, classList }) => {
        let section = document.querySelector(hash)
        if (
          section &&
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          classList.add("current")
        } else {
          classList.remove("current")
        }
      })
    })
  },
  // watch: {
  //   $route() {
  //     // this.$toast.clear();
  //   },
  // },
}
</script>
