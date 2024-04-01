<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const countdownRedirect = ref(5);
    const router = useRouter();

    function Countdown() {
      if (countdownRedirect.value >= 0) {
        setTimeout(() => {
          countdownRedirect.value -= 1;
          Countdown();
        }, 1000);
      } else {
        router.push("/");
      }
    }

    onMounted(() => {
      Countdown();
    });

    return {
      countdownRedirect,
    };
  },
});
</script>
<template>
  <div class="overflow-y-auto h-[100vh]">
    <div class="table w-full h-full">
      <div class="table-header-group w-full">
        <div class="flex gap-4 justify-end items-center pt-9 pr-14">
          <a href="/">
            <img class="h-12 w-auto" src="@/assets/img/tmd.svg" alt="" />
          </a>
          <div class="my-auto text-sm">
            <p>ระบบบริการสารสนเทศ</p>
            <p>อุตุนิยมวิทยาเพื่อการบริการ</p>
          </div>
        </div>
      </div>
      <div class="table-cell px-6 py-14 align-middle">
        <slot />
      </div>
      <div class="table-footer-group w-full">
        <div class="text-2xl text-center pt-0 pb-12">
          กำลังส่งคุณไปยังหน้าแรกในอีก {{ countdownRedirect }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
