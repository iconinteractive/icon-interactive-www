<template>
  <Layout>
    <div class="container">
      <h1>Blocks Page</h1>
      <div v-html="$page.post.content" />
      <h1>{{ $page.post.project_blocks}}</h1>
      <p>{{ $page.post}}</p>
      <component
        v-for="(item, idx) in $page.post.project_blocks"
        v-bind:is="item.template"
        :key="idx"
      ></component>
    </div>
  </Layout>
</template>


<page-query>
query BlocksPage ($path: String!) {
  post: blocksPage (path: $path) {
   project_blocks {
    template
    quote
    } 
  }
}
</page-query>

<script>
import full_width_image from "../components/FullWidthImage";
import quote from "../components/Quote";

export default {
  components: {
    full_width_image,
    quote
  }
  // metaInfo() {
  //   return {
  //     title: this.$page.post.title
  //   };
  // }
};
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
