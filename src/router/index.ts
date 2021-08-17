import * as VueRouter from "vue-router";
import routes from "./routes";

const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});

router.afterEach((to, from) => {
  //   document.title = getRouteText(to)
});

export default router;
