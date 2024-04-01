import { createRouter, createWebHistory } from "vue-router";

import error from "@/layouts/error.layout.vue";
import Index from "@/pages/index.vue";
import NotFound from "@/pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Index,
  },
  {
    path: "/404",
    name: "404 Not Found",
    component: NotFound,
    meta: {
      layout: error,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) =>{
  console.log("beforeach");
  localStorage.setItem('loadPage', JSON.stringify(true))

  next();
});
router.afterEach((to, from) => {
  console.log("aftereach");
  localStorage.setItem('loadPage', JSON.stringify(false))
  // localStorage.removeItem('loadPage')
});

export default router;
