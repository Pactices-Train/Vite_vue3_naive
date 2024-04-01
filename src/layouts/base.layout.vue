<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<template>
  <Navbar />
  <div
    class="overflow-scroll w-full absolute mt-[56px] sm:mt-[72px]"
    style="height: calc(100vh - 72px)"
  >
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
</style>
