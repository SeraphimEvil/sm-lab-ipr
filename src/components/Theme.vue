<script setup lang="ts">
import {PropType} from "vue";
import {ThemeModel} from "../models/theme.ts";

defineProps({
  theme: {
    type: Object as PropType<ThemeModel>,
    default: () => ({})
  }
})
</script>

<template>

</template>

<style scoped>

</style>