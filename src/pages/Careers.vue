<template>
  <Layout>
    <section class="container">
      <h1 class="title">
        ICON
        <br />
        <span class="pink">CAREERS</span>
      </h1>
      <div class="career-content" ref="snippet_container"></div>
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

<style scoped>
.gnewtonBlueBtn {
  background-color: rgb(229, 19, 101) !important;
  color: #fff !important;
  border-radius: 1%;
}
.career-content {
  width: 75%;
}
#gnewtonGeneric > td > div {
  text-align: left;
}
</style>
