<template>
  <section class="facebook360">
    <div class="embed margin">
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
        let hasTouchScreen = false;
        if ("maxTouchPoints" in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
            if (mQ && mQ.media === "(pointer:coarse)") {
                hasTouchScreen = !!mQ.matches;
            } else if ('orientation' in window) {
                hasTouchScreen = true;
            } else {
                let UA = navigator.userAgent;
                hasTouchScreen = (
                    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
                );
            }
            this.mobileCheck = hasTouchScreen
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
@media (max-width: 1100px) {
  .facebook360 {
    display: none;
  }
}
</style>
