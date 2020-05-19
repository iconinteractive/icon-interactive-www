<template>
  <Layout :style="style">
    <section>
      <div class="container">
        <Introduction :intro="$page.post.intro" />
        <component
          v-for="(item, idx) in $page.post.project_blocks"
          v-bind:is="item.template"
          :key="idx"
          :quote="item.Quote"
          :fullWidthSrc="item.FullWidthImageSrc"
          :fullWidthAltText="item.FullWidthImageAltText"
          :vimeo_video_id="item.vimeo_video_id"
          :resultsObj="item.results"
          :textblock="item.text_block"
          :twoColImages="item.images"
          :facebook360block="item.facebook_360"
        ></component>
      </div>
    </section>
  </Layout>
</template>


<page-query>
query BlocksPage ($path: String!) {
  post: blocksPage (path: $path) {
    title
    intro {
      display_on_site, 
      date,
      service_tags { service_tag_one, service_tag_two },
      page_title,
      client,
      display_on_home_page,
      thumbnail,
      project_url,
      client_logo,
      intro_paragraph
      page_colors { background, text, highlight }
      background_hero_image
    }
    project_blocks {
      template
      Quote
      FullWidthImageSrc
      FullWidthImgAltText
      vimeo_video_id
      results { column_one, column_two, column_three }
      text_block
      images {
        image_one, image_one_alt_text, image_two, image_two_alt_text
      }
      facebook_360 { facebook_360_src_url }
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
import twoColumnImages from "../components/twoColumnImages";
import Facebook360 from "../components/Facebook360";

export default {
  components: {
    Introduction,
    fullwidthimage,
    Quote,
    Vimeo,
    Results,
    textblock,
    twoColumnImages,
    Facebook360
  },
  computed: {
    style() {
      return `--color-highlight: ${this.$page.post.intro.page_colors.highlight};`;
    }
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
