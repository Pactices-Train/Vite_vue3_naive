<script lang="ts">
import { layouts } from "./layouts";
import { useTitle } from 'vue-page-title';

export default {
  setup() {
    const route = useRoute();
    const layout = computed(() => route?.meta?.layout ?? layouts.base);
    const { setTitle } = useTitle();

    watchEffect(() => {
      setTitle(route?.name);
    });
    return {
      layout,
    };
  },
};
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap&subset=thai");

* {
  font-family: Poppins, Prompt !important;
}
</style>
