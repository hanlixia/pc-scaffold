<template>
    <div style="background-color:#fafafa;">
      <router-link :to="{path:'/hello'}">首页</router-link>
      <router-link :to="{path:'/about'}" style="margin-left: 30px">关于我们</router-link>
    </div>
</template>

<script>
export default {
  name: "gt-header"
}
</script>
