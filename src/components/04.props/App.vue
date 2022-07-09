<template>
  <div>
    <h1>这是App.vue根组件</h1>
    <hr>
    <Article title="面朝大海，春暖花开" author="海子"></Article>
  </div>
</template>

<script>
import Article from "./Article.vue";

export default {
  name: "App",
  components:{Article}
}
</script>

<style scoped>

</style>
