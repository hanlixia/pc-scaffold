import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/layout/Layout";
import TestAbout from "../components/TestAbout";
import TestHello from "../components/TestHello";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: {
      path: "/testHello"
    },
    children: [
      {
        path: "/testHello",
        name: "testHello",
        component: TestHello
      },
      {
        path: "/testAbout",
        name: "testAbout",
        component: TestAbout
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

export default router;
