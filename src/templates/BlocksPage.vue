<template>
  <Layout>
    <div class="container">
      <h1>Blocks Page</h1>
      <div v-html="$page.post.content" />
      <Introduction />
      <p>{{ $page.post }}</p>
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
    title
    project_blocks {
      template
    } 
  }
}
</page-query>

<script>
import Introduction from "../components/Introduction";
import HeroImage from "../components/HeroImage";
import quote from "../components/Quote";

export default {
  components: {
    HeroImage,
    quote,
    Introduction
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
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
