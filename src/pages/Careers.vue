<template>
  <Layout>
    <section class="container">
      <h1>Careers</h1>
      <div ref="snippet_container"></div>
    </section>
  </Layout>
</template>

<script>
let htmlEl = null;
export default {
  mounted() {
    if (process.isClient) {
      this.insertSnippet();
    }
  },
  methods: {
    insertSnippet() {
      if (process.isClient) {
        this.insertSnippet();
        let elem = document.createElement("script");
        elem.type = "text/javascript";
        elem.src =
          "https://newton.newtonsoftware.com/career/iframe.action?clientId=8a7883c6700909c4017010fafd6c06e7";
        const wrap = this.$refs.snippet_container;
        wrap.appendChild(elem);
      }
    }
  }
};
</script>
