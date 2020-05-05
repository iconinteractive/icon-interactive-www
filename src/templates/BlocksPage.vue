<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content" />
      <Introduction :client="$page.post.client" />
      <p>{{ $page.post }}</p>
      <component
        v-for="(item, idx) in $page.post.project_blocks"
        v-bind:is="item.template"
        :key="idx"
        :quote="$page.post.project_blocks.quote"
      ></component>
    </div>
  </Layout>
</template>


<page-query>
query BlocksPage ($path: String!) {
  post: blocksPage (path: $path) {
    title
    client
    project_blocks {
      template
      quote
    } 
  }
}
</page-query>

<script>
import Introduction from "../components/Introduction";
import FullWidthImage from "../components/FullWidthImage";
import Quote from "../components/Quote";

export default {
  components: {
    Introduction,
    FullWidthImage,
    Quote
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
