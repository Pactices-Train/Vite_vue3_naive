<template>
  <header>
    <Popover class="relative px-2 z-40 z-[1000]">
      <div class="fixed top-0 drop-shadow-lg left-0 right-0 bg-[#0B5985]">
        <div
          class="mx-auto flex max-w-7xl items-center justify-between text-white px-6 py-2 lg:justify-start md:space-x-10"
        >
          <div class="flex gap-4 justify-start lg:w-0 lg:flex-1 items-center">
            <a href="/">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto sm:h-14"
                src="@/assets/img/tmd.svg"
                alt=""
              />
            </a>
            <div class="my-auto text-sm">
              <p>ระบบบริการสารสนเทศ</p>
              <p>อุตุนิยมวิทยาเพื่อการบริการ</p>
            </div>
          </div>
          <div class="-my-2 -mr-2 lg:hidden">
            <PopoverButton
              class="inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden space-x-10 lg:flex">
            <a href="/" class="text-base font-normal hover:font-medium">{{
              $t("menu.home")
            }}</a>
            <a
              href="https://iot.tmd.go.th/"
              class="text-base font-normal hover:font-medium"
              >TMD IoT Platform</a
            >
            <a
              href="https://e-service.tmd.go.th/"
              class="text-base font-normal hover:font-medium"
              >TMD e-Service
            </a>
          </PopoverGroup>
          <div class="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <ChangeLang />
            <!-- <n-divider vertical class="!bg-gray-300 !mx-5 !h-[25px] !w-[2px]" /> -->
          </div>
        </div>

        <transition
          enter-active-class="duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition lg:hidden"
          >
            <div
              class="divide-y-2 divide-gray-50 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div class="px-5 py-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <img
                      class="h-8 w-auto sm:h-16"
                      src="@/assets/img/tmd.svg"
                      alt=""
                    />

                    <div class="my-auto text-base">
                      <p>ระบบบริการสารสนเทศ</p>
                      <p>อุตุนิยมวิทยาเพื่อการบริการ</p>
                    </div>
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-xl bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="px-5 py-6">
                <div class="grid grid-cols-1 gap-4">
                  <a
                    href="/"
                    class="text-base font-medium text-gray-500 hover:text-gray-900"
                    >{{ $t("menu.home") }}</a
                  >
                  <a
                    href="https://iot.tmd.go.th/"
                    class="text-base font-medium text-gray-500 hover:text-gray-900"
                    >TMD IoT Platform</a
                  >
                  <a
                    href="https://e-service.tmd.go.th/"
                    class="text-base font-medium text-gray-500 hover:text-gray-900"
                    >TMD e-Service
                  </a>
                </div>
              </div>
              <div class="px-5 py-6">
                <div class="w-fit">
                  <ChangeLang />
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </div>
    </Popover>
  </header>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
export default defineComponent({
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
