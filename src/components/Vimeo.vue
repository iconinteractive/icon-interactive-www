<template>
  <section>
    <div class="vimeo margin">
      <iframe
        :src="videoSource"
        class="full-width"
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
  padding: 56.25% 0 0 0;
  position: relative;
}
.full-width {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>