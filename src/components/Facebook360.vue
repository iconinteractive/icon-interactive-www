<template>
  <section>
    <div v-if="this.mobileCheck"></div>
    <div v-else class="embed" style="padding:56.25% 0 0 0;position:relative;">
      <iframe
        :src="facebook360block.facebook_360_src_url"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        allowfullscreen="true"
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
        this.mobileCheck =
          typeof window.orientation !== "undefined" ||
          navigator.userAgent.indexOf("IEMobile") !== -1;
      }
    }
  },
  created() {
    this.isMobile();
  }
};
</script>

<style>
.embed {
  margin: 1rem;
}
</style>