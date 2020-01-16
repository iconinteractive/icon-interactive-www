<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.post.title }}</h1>
      <div class="dl-wrap">
        <a
          :href="$page.post.pdf_url"
          :download="`${$page.post.title}.pdf`"
          @click.prevent="false"
        >Download: Right click here & select Save Link As</a>
      </div>
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
import axios from "axios";

export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  methods: {
    // downloadItem(url, label) {
    //   axios
    //     .get(url, { responseType: "blob" })
    //     .then(({ data }) => {
    //       const blob = new Blob([data], { type: "application/pdf" });
    //       const link = document.createElement("a");
    //       link.href = URL.createObjectURL(blob);
    //       link.download = label;
    //       link.click();
    //       URL.revokeObjectURL(link.href);
    //     })
    //     .catch(error => console.error(error));
    // }
  }
};
</script>

<style scoped>
a {
  text-decoration: underline;
  color: var(--color-highlight);
}
.dl-wrap {
  margin: 2rem 0;
}
.pdf-wrap {
  height: 90vh;
}
@media (max-width: 800px) {
}
</style>
