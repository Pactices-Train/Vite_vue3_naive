<template>
  <n-button color="#0CA789" class="w-full md:w-fit bg-[#0CA789]">
    <template #icon>
      <n-icon>
        <shopping-cart />
      </n-icon>
    </template>
  </n-button>
</template>

<script>
import { ShoppingCart } from '@vicons/fa'
export default {
  components: {
    ShoppingCart,
  }
};
</script>

<style scoped></style>
