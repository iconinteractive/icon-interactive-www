<template>
  <Layout>
    <section class="container">
      <h1>Careers</h1>
      <ClientOnly>
        <div class="career-wrap"></div>
      </ClientOnly>
    </section>
  </Layout>
</template>

<script>
export default {
  mounted() {
    if (process.isClient) {
      let elem = document.createElement("script");
      elem.type = "text/javascript";
      elem.setAttribute("id", "gnewtonjs");
      elem.src =
        "//newton.newtonsoftware.com/career/iframe.action?clientId=8a7883c6700909c4017010fafd6c06e7";

      const wrap = this.$refs.snippet_container;
      wrap.appendChild(elem);
    }
  }
};
</script>
