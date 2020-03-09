<template>
  <Layout>
    <div class="container">
      <div v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query SplashPage ($path: String!) {
  post: splashPage (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  components: {},
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
