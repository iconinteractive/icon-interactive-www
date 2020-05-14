<template>
  <Layout>
    <div class="container">
      <component
        v-for="(item, idx) in $page.post.project_blocks"
        v-bind:is="item.template"
        :key="idx"
        :quote="item.Quote"
        :fullWidthSrc="item.FullWidthImageSrc"
        :fullWidthAltText="item.FullWidthImageAltText"
        :vimeo_video_id="item.vimeo_video_id"
        :column_one="item.results"
        :textblock="item.text_block"
      ></component>
    </div>
  </Layout>
</template>


<page-query>
query BlocksPage ($path: String!) {
  post: blocksPage (path: $path) {
    title
    project_blocks {
      template
      Quote
      FullWidthImageSrc
      FullWidthImgAltText
      vimeo_video_id
      results{column_one, column_two, column_three}
      text_block
    } 
  }
}
</page-query>

<script>
import Introduction from "../components/Introduction";
import fullwidthimage from "../components/FullWidthImage";
import Quote from "../components/Quote";
import Vimeo from "../components/Vimeo";
import Results from "../components/Results";
import textblock from "../components/TextBlock";

export default {
  components: {

    Introduction,
    fullwidthimage,
    Quote,
    Vimeo,
    Results,
    textblock
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
