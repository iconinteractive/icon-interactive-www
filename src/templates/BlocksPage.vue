<template>
  <Layout>
    <div class="container">
      <h1>Blocks Page</h1>
      <div v-html="$page.post.content" />
      <h1>{{ $page.post.project_blocks}}</h1>
    </div>
    <component
        v-for="(item, idx) in $page.post.project_blocks"
        v-bind:is="item.template"
        :key="idx"
        :quote="item.Quote"
        :column_one="item.column_one"
        :column_two="item.column_two"
        :column_three="item.column_three"
      ></component>
  </Layout>
</template>


<page-query>
query BlocksPage ($path: String!) {
  post: blocksPage (path: $path) {
   project_blocks {
    template
    full_width_image
    quote
  } 
  }
}
</page-query>

<script>
export default {
  components: {
    Results
  }
  // metaInfo() {
  //   return {
  //     title: this.$page.post.title
  //   };
  // }
}
</script>

<style scoped>
a {
  text-decoration: underline;
  color: var(--color-highlight);
}
@media (max-width: 800px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
