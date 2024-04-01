import { useMediaQuery, useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { watch, type Ref } from 'vue';

export const useStyleStore = defineStore('style', {
  state: () => {
    const isSmallScreen = useMediaQuery('(max-width: 700px)');
    const isMenuCollapsed = useStorage('isMenuCollapsed', isSmallScreen.value) as Ref<boolean>;

    watch(isSmallScreen, (v) => (isMenuCollapsed.value = v));

    return {
      isMenuCollapsed,
      isSmallScreen,
    };
  },
});
