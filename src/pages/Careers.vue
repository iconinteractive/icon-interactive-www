<template>
  <Layout>
    <section class="container">
      <h1>Careers</h1>
      <div id="career-frame"></div>
    </section>
  </Layout>
</template>

<script>
export default {
  mounted() {
    if (process.isClient) {
      let elem = document.createElement("script");
      elem.type = "text/javascript";
      elem.src =
        "https://newton.newtonsoftware.com/career/iframe.action?clientId=8a7883c6700909c4017010fafd6c06e7";

      let wrapper = document.querySelector("#career-frame");
      wrapper.appendChild(elem);
    }
  }
};
</script>

<style>
</style>