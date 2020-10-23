<template>
  <div class="body">
    <!-- 头部 -->
    <gt-header></gt-header>

    <!-- 主内容区 -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import gtHeader from './Header'
export default {
  name: 'layout',
  components: {
    gtHeader
  }
}
</script>

<style scoped>
.main-content {
  margin-top: 30px;
}
</style>
