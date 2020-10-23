import "babel-polyfill";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assest/css/common.less';

Vue.config.productionTip = false


/**
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 */
if (process.env.NODE_ENV !== "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
router.onError(error => {
  const pattern = /Loading\s+chunk\s+(\d)+\s+failed/gi;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    console.log("router_error" + targetPath);
    router.replace(targetPath);
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
