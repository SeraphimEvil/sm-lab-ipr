<script setup lang="ts">
import {onMounted, PropType, ref} from "vue";

import {ThemeModel} from "../models/theme.ts";

const props = defineProps({
  theme: {
    type: Object as PropType<ThemeModel>,
    default: () => ({})
  }
})
const temp = ref('')

onMounted(() => {
  fetch(props.theme?.path)
      .then(res => res.text())
      .then(data => {
        temp.value = data
      })
})
</script>

<template>
  <h2>{{ theme.title }}</h2>
  <div v-html="temp"></div>
</template>

<style lang="scss">
h2 {
  margin: 0 0 0.8rem;
}

p {
  margin: 0 0 0.5rem;
}

code {
  background-color: red;
}
</style>