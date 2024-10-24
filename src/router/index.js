import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Detail from "@/views/Detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "Detail",
      component: Detail,
      props: true
    },
  ],
});

export default router;
