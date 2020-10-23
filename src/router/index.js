import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/layout/Layout.vue";
import About from "../components/About.vue";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: {
      path: "/hello"
    },
    children: [
      {
        path: "/hello",
        name: "hello",
        component: HelloWorld
      },
      {
        path: "/about",
        name: "about",
        component: About
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
