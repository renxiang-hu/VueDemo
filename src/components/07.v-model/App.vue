<template>
   <h1>App根组件 --- {{count}}</h1>
   <hr>

   <Counter v-model:number="count"></Counter>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "App",
  components: {Counter},
  data(){
    return{
      count: 0
    }
  }
}
</script>

<style scoped>

</style>
