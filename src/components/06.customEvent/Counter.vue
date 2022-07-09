<template>
  <p>count的值是：{{count}}</p>
  <button @click="add">+1</button>
</template>

<script>
export default {
  name: "Counter",
  //1.声明自定义事件
  emits:['countChange'],
  methods:{
    add(){
      this.count++;
      //2.this.$emit触发自定义事件
      this.$emit('countChange',this.count);
    }
  },
  data(){
    return{
      count: 0
    }
  }
}
</script>

<style scoped>

</style>
