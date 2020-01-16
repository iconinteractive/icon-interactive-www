<template>
  <Layout>
    <div class="container">
      <h1>{{$page.post.title}}</h1>
      <a :href="$page.post.pdf_url" :download="$page.post.title">Download</a>
      <section class="pdf-wrap">
        <object :data="$page.post.pdf_url" type="application/pdf" width="100%" height="100%">
          <embed :src="$page.post.pdf_url" type="application/pdf" width="100%" height="100%" />
        </object>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query PdfPost ($path: String!) {
  post: pdfPost (path: $path) {
    title
    pdf_url
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
.pdf-wrap {
  border: 1px solid salmon;
  height: 1000px;
}
@media (max-width: 800px) {
}
</style>
