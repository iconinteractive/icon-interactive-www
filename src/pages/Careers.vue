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
      insertSnippet();
      // let elem = document.createElement("script");
      // elem.type = "text/javascript";
      // elem.src =
      //   "https://newton.newtonsoftware.com/career/iframe.action?clientId=8a7883c6700909c4017010fafd6c06e7";

      // let wrapper = document.querySelector("#career-frame");
      // wrapper.appendChild(elem);
    }
  },
  methods: {
    insertSnippet() {
      if (htmlEl) return;
      const el = this.$refs.snippet_container;
      htmlEl = document.createElement("div");
      htmlEl.classList.add("html-snippet");
      el.appendChild(htmlEl);
      const scriptsTags = htmlEl.getElementsByTagName("script");
      for (let i = 0; i < scriptsTags.length; i++) {
        let parentNode = scriptsTags[i].parentNode;
        let newScriptTag = document.createElement("script");
        newScriptTag.type = "text/javascript";
        newScriptTag.src =
          "https://newton.newtonsoftware.com/career/iframe.action?clientId=8a7883c6700909c4017010fafd6c06e7";
        newScriptTag.text = scriptsTags[i].text;
        parentNode.removeChild(scriptsTags[i]);
        parentNode.appendChild(newScriptTag);
      }
    }
  }
};
</script>
