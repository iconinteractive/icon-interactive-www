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
        :textblock="item.text_block"
        :twoColImages="item.images"
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
      text_block
      images {
        image_one, image_one_alt_text, image_two, image_two_alt_text
      }
    } 
  }
}
</page-query>

<script>
import Introduction from "../components/Introduction";
import fullwidthimage from "../components/FullWidthImage";
import Quote from "../components/Quote";
import textblock from "../components/TextBlock";
import twoColumnImages from "../components/twoColumnImages";

export default {
  components: {
    Introduction,
    fullwidthimage,
    Quote,
    textblock,
    twoColumnImages
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
