import { createApp } from 'vue'
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"

import './style.scss'
import App from './App.vue'
import router from "./router"

import naive from "naive-ui";

import axios from 'axios'
import VueAxios from 'vue-axios'
import en from "./language/en.json";
import th from "./language/th.json";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'boxicons/css/boxicons.min.css'
import { pageTitle } from 'vue-page-title'
import Vue3Lottie from "vue3-lottie"

const i18n = createI18n({
    locale: localStorage.getItem("locale") ?? "en",
    globalInjection: true,
    legacy: false,
    fallbackLocale: "en",
    messages: {
      en,
      th,
    },
  });

const app = createApp(App);

app.use(router);
app.use(naive);
app.use(VueAxios, axios)
app.use(createPinia());
app.use(i18n);
app.use(VueSweetalert2);
app.use(
  pageTitle({
    suffix: ' | TMD Portal'
  })
);
app.use(Vue3Lottie);

app.mount('#app')
