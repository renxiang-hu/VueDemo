<template>
   <div>
     <input type="text" v-model.number="name">
     <p>{{count}} 乘以2的值为 {{plus}}</p>
   </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      count:1,
    }
  },
  computed:{
    plus(){
      return this.count * 2;
    }
  }
}
</script>

<style scoped>

</style>
