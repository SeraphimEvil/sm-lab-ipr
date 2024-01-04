<script setup lang="ts">
import Header from "./components/Header.vue";
import Disclamer from "./components/Disclamer.vue";
</script>

<template>
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
  <Disclamer></Disclamer>
</template>

<style scoped>
</style>