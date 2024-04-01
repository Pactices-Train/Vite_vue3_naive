<template>
  <n-button color="#3B82F6" class="w-full md:w-fit bg-[#3B82F6]">
    <template #icon>
      <n-icon>
        <Eye />
      </n-icon>
    </template>
    {{ $t('reportPage.seeReport') }}
  </n-button>
</template>

<script>
import { Eye } from '@vicons/ionicons5'
export default {
  components: {
    Eye,
  }
};
</script>

<style scoped></style>
