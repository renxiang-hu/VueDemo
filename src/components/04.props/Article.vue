<template>
   <div>
     <h3>标题：{{title}}</h3>
     <h3>作者：{{author}}</h3>
   </div>
</template>

<script>
export default {
  name: "Article",
  props:['title','author']
}
</script>

<style scoped>

</style>
