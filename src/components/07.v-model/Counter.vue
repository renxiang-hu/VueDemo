<template>
   <p>count的值是：{{number}}</p>
   <button @click="add">+1</button>
</template>

<script>
export default {
  name: "Counter",
  emits:['update:number'],
  props:['number'],
  methods:{
    add(){
      this.$emit('update:number',this.number+1)
    }
  }
}
</script>

<style scoped>

</style>
