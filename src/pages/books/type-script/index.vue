<script setup lang="ts">
import {ref} from "@vue/reactivity";
import {ThemeModel} from "../../../models/theme.ts";

import ThemeList from "../../../components/ThemeList.vue";
import ViewWrapper from "../../../components/ViewWrapper.vue";
import ThemeView from "../../../components/ThemeView.vue";

import list from "./themes/list.json";

const selectedTheme = ref<ThemeModel | undefined>(undefined)

const onSelect = (theme: ThemeModel) => {
  selectedTheme.value = undefined

  setTimeout(() => {
    selectedTheme.value = theme
  })
}
</script>

<template>
  <ThemeList
      :list="list"
      :selected-theme="selectedTheme"
      @select="onSelect"
  ></ThemeList>

  <ViewWrapper>
    <ThemeView v-if="selectedTheme"
               :theme="selectedTheme"
    ></ThemeView>

    <div v-else>
      Надо выбрать тему
    </div>
  </ViewWrapper>
</template>

<style scoped>

</style>