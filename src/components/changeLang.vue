<template>
  <n-dropdown
    trigger="click"
    :options="langOption"
    :show-arrow="true"
    @select="changeLang"
  >
    <div class="cursor-pointer flex gap-2">
      <div class="flex gap-2">
        <img class="w-5" :src="langList[$i18n.locale].imageLang" />
        <h1>
          {{ langList[$i18n.locale].name }}
        </h1>
      </div>
    </div>
  </n-dropdown>
</template>

<script lang="ts">
import { NIcon, NAvatar } from "naive-ui";
import { useI18n } from "vue-i18n";
export default defineComponent({
  setup() {
    const langDropdown = ref(false);
    const langList = {
      th: {
        name: "TH",
        imageLang: "https://cdn-icons-png.flaticon.com/512/206/206614.png",
      },
      en: {
        name: "EN",
        imageLang:
          "https://cdn.iconscout.com/icon/free/png-256/united-kingdom-3596867-2998581.png",
      },
    };
    const langOption = [
      {
        label: "TH",
        key: "th",
        icon() {
          return h(NIcon, null, {
            default: () =>
              h(NAvatar, {
                style: "margin-right: 12px; width: 20px; height: 20px",
                src: "https://cdn-icons-png.flaticon.com/512/206/206614.png",
              }),
          });
        },
      },
      {
        label: "EN",
        key: "en",
        icon() {
          return h(NIcon, null, {
            default: () =>
              h(NAvatar, {
                style: "margin-right: 12px; width: 20px; height: 20px",
                src: "https://cdn.iconscout.com/icon/free/png-256/united-kingdom-3596867-2998581.png",
              }),
          });
        },
      },
    ];
    const { locale } = useI18n();

    function changeLang(langSelect: any) {
      locale.value = langSelect;
      localStorage.setItem("locale", langSelect);
    }

    return {
      langDropdown,
      langList,
      langOption,

      changeLang,
    };
  },
});
</script>
<style scoped></style>
