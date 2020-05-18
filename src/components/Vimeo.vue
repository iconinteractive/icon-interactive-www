<template>
  <section>
    <h1>Video</h1>
    <div class="vimeo" style="padding:56.25% 0 0 0;position:relative;">
      <iframe
        :src="videoSource"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  props: ["vimeo_video_id"],
  computed: {
    videoSource: function() {
      return `https://player.vimeo.com/video/${this.vimeo_video_id}?title=0&byline=0&portrait=0`;
    }
  }
};
</script>

<style scoped>
.vimeo {
  margin: 1rem;
}
</style>