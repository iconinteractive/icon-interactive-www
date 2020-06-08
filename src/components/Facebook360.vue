<template>
  <section>
    <div v-if="isMobile" class="embed margin">
      <iframe
        :src="facebook360block.facebook_360_src_url"
        class="full-width"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        allowfullscreen="true"
        title="facebook 360 video"
      ></iframe>
    </div>
    <div v-else class="hide" />
    {{ mobileCheck }}
  </section>
</template>

<script>
export default {
  props: ["facebook360block"],
  data() {
    return {
      mobileCheck: false
    };
  },
  methods: {
    isMobile() {
      if (process.isClient) {
        if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i)||
        navigator.userAgent.match(/iPhone/i)||
        navigator.userAgent.match(/iPad/i)||
        navigator.userAgent.match(/iPod/i)||
        navigator.userAgent.match(/BlackBerry/i)||
        navigator.userAgent.match(/Windows Phone/i)) {
        return true
      } else {
        return false
      }
      }
    }
  }
};
</script>

<style>
.embed {
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
.hide {
  display: none;
}
</style>
