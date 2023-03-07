import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Example from "@/views/example/index.vue";
import Index from "@/views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/index",
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/example",
    component: Example,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
