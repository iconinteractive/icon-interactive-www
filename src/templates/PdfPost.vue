<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.post.title }}</h1>
      <div v-if="mobileCheck">
        <p>Mobile browsers don't support embedded pdfs yet</p>
        <a
          :href="$page.post.pdf_url"
          @click.prevent="false"
        >Download by holding this link and selecting Download Linked File</a>
      </div>
      <article v-else>
        <div class="dl-wrap">
          <a
            :href="$page.post.pdf_url"
            :download="`${$page.post.title}.pdf`"
            @click.prevent="false"
          >To Download: Right click here & select Save Link As</a>
        </div>
        <section class="pdf-wrap">
          <object :data="$page.post.pdf_url" type="application/pdf" width="100%" height="100%">
            <embed :src="$page.post.pdf_url" type="application/pdf" width="100%" height="100%" />
          </object>
        </section>
      </article>
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
  },
  data() {
    return {
      mobileCheck: false
    };
  },
  methods: {
    isMobile() {
      if (process.isClient) {
        this.mobileCheck =
          typeof window.orientation !== "undefined" ||
          navigator.userAgent.indexOf("IEMobile") !== -1;
      }
    }
  },
  mounted() {
    this.isMobile();
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
  h1 {
    font-size: 1.5rem;
  }
}
</style>
