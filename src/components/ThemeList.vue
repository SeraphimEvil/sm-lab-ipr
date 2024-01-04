<script setup lang="ts">
import {PropType} from "vue";
import {ThemeModel} from "../models/theme.ts";

const emit = defineEmits(['select'])

defineProps({
  list: {
    type: Array as any,
    default: () => ([])
  },
  selectedTheme: {
    type: Object as PropType<ThemeModel>,
    default: () => ({})
  }
})
</script>

<template>
  <div class="theme-list">
    <div class="theme-list__wrapper">
      <div class="theme-list__link"
           :class="{'theme-list__link--selected': item.id === selectedTheme?.id}"
           v-for="item in list"
           :key="item.id"
           @click="emit('select', item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme-list {
  background-color: #343434;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  width: 150px;
}

.theme-list__title {
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0 1.5rem;
}

.theme-list__wrapper {
  display: flex;
  flex-direction: column;
  //gap: 10px;
}

.theme-list__link {
  cursor: pointer;
  opacity: 0.5;
  padding: 0.2rem 1.5rem;
}

.theme-list__link--selected {
  opacity: 1;
  background-color: rgba(#fff, 0.2);
}
</style>