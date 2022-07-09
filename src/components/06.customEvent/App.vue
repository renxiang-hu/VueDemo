<template>
  <h1>App父组件</h1>
  <hr>
  <Counter @countChange="getCount"></Counter>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "App",
  components:{Counter},
  methods:{
    getCount(val){
      console.log(val,'val')
      console.log("触发countChange自定义事件")
    }
  }
}
</script>

<style scoped>

</style>
