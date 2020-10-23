<template>
  <div class="hello">
    hello World! 内容区
  </div>
</template>

<script>
import { getTestApi } from '../api'
export default {
  name: 'test-hello',
  data() {
    return {}
  },
  created(){
    this.getTestApi()
  },
  methods: {
    getTestApi(){
      getTestApi().then(res=>{
        console.log(res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
  box-sizing: border-box;
}
</style>
