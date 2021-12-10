<script lang="ts" setup>
// Detect current route for highliting on the UI
const currentRoute = useRoute()
const isActive = (path: string) => path === currentRoute.fullPath

// Get the list of routes to automatically populate the menu with route names and paths
const router = useRouter()
const routes = router.getRoutes()

/// Removes the first and last routes, because they are redirects not paths to any pages
const pages = routes.slice(1, routes.length - 1)
</script>

<template>
  <ion-content>
    <ion-list>
      <ion-menu-toggle 
        auto-hide="false"
        v-for="page in pages"
        :key="page.name"
      >
        <ion-item 
          @click="router.replace(page.path)"
          class="noselect"
          :class="{ active: isActive(page.path)}"
        >
          {{ page.name }}
        </ion-item>
      </ion-menu-toggle>
    </ion-list>
  </ion-content>
</template>

<style scoped>
.active-link {
  --ion-text-color: var(--ion-color-primary);
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.noselect:hover {
  color: var(--ion-color-primary);
}

.active {
  color: var(--ion-color-primary);
}
</style>