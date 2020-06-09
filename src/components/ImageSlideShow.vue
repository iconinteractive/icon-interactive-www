<template>
  <section class="embed-wrap" v-touch:swipe.left="prev" v-touch:swipe.right="next">
    <transition name="img-fade" tag="section">
      <div v-for="i in [currentIdx]" :key="i" class="full-img">
        <g-image :src="currentImg" alt="image slide show" />
      </div>
    </transition>
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
  min-height: 800px;
  position: relative;
  top: 2rem;
  margin-bottom: 10rem;
}
.embed-wrap {
  padding: 56.25% 0 0 0;
  position: relative;
  overflow: hidden;
}
.full-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.img-fade-enter-active,
.img-fade-leave-active {
  opacity: 1;
  transition: all 0.4s ease-out;
  /* transform: translateX(0); */
}
.img-fade-enter,
.img-fade-leave-to {
  opacity: 0;
  /* transform: translateX(-100%); */
  transition: all 0.4s ease-out;
}
img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 100%;
  height: auto;
}
.slideshow-controls {
  position: absolute;
  left: 47%;
  bottom: 15px;
}
.prev,
.next {
  width: 30px;
  height: 30px;
  color: var(--color-highlight);
  border: 2px solid var(--color-highlight);
  border-radius: 4px;
  font-size: 2rem;
  padding: 0 0.5rem;
  background-color: var(--color-base);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
@media (max-width: 800px) {
  .slide-show-wrap {
    min-height: 200px;
    margin-top: 3rem;
  }
  .slideshow-controls {
    position: relative;
    left: 43%;
    bottom: -2px;
  }
  img {
    min-height: auto;
  }
  .prev,
  .next {
    width: 20px;
    height: 20px;
    font-size: 1.2rem;
    border: none;
  }
  .prev:hover,
  .next:hover {
    color: var(--color-highlight);
    border: none;
  }
}
</style>
