import { ref, Ref } from "vue";
import { defineStore } from "pinia";

interface AuthLogin {
  isLogin: Ref<boolean>;
}

export const useAuthStore = defineStore("AuthLogin", {
  state: (): AuthLogin => ({
    isLogin: ref(true),
  }),
});
