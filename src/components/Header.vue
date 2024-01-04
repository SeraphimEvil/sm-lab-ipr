<script setup lang="ts">

</script>

<template>
  <header class="header">
    <router-link
        class="header__link"
        :to="{name: 'computer-science'}"
        active-class="header__link--active"
    >
      Computer science
    </router-link>

    <router-link
        class="header__link"
        :to="{name: 'type-script'}"
        active-class="header__link--active"
    >
      TypeScript
    </router-link>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.header__link {
  opacity: 0.5
}

.header__link--active {
  opacity: 1;
}
</style>