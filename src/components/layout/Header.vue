<template>
    <div style="background-color:#fafafa;">
      <router-link :to="{path:'/testHello'}">首页</router-link>
      <router-link :to="{path:'/testAbout'}" style="margin-left: 30px">关于我们</router-link>
    </div>
</template>

<script>
export default {
  name: "gt-header"
}
</script>
