<template>
  <section class="slide-show-wrap">
    <!-- <transition-group name="img-fade" tag="section"> -->
    <div v-for="i in [currentIdx]" :key="i">
      <img :src="currentImg" />
    </div>
    <!-- </transition-group> -->
    <div class="slideshow-controls">
      <span class="prev" @click="prev">←</span>
      <span class="next" @click="next">→</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "ImageSlideShow",
  props: ["imageGallery"],
  data() {
    return {
      currentIdx: 0
    };
  },
  methods: {
    next() {
      this.currentIdx += 1;
    },
    prev() {
      this.currentIdx -= 1;
    }
  },

  computed: {
    currentImg() {
      return this.imageGallery[
        Math.abs(this.currentIdx) % this.imageGallery.length
      ];
    }
  }
};
</script>

<style scoped>
.slide-show-wrap {
  min-height: 600px;
  position: relative;
}
.img-fade-enter-active,
.img-fade-leave-active {
  opacity: 1;
  transition: opacity 0.5s;
}

.img-fade-enter,
.img-fade-leave-to {
  opacity: 0;
}
img {
  min-height: 600px;
  width: 100%;
  transition: all 300ms ease-in;
}
.slideshow-controls {
  position: absolute;
  left: 45%;
  bottom: 5%;
}
.prev,
.next {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 30px;
  height: 30px;
  color: var(--color-highlight);
  border: 2px solid var(--color-highlight);
  border-radius: 4px;
  font-size: 2rem;
  padding: 0 0.5rem;
  background-color: var(--color-base);
}
.prev {
  margin-right: 10px;
}

.prev:hover,
.next:hover {
  color: var(--color-contrast);
  cursor: pointer;
  border: 2px solid var(--color-contrast);
  opacity: 0.7;
}
</style>