<template>
  <section class="grid">
    <div class="logo-wrap" v-for="(imageUrl, idx) in this.smallGrid" :key="idx">
      <g-image :src="imageUrl" alt="client logo" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logoGrid: require("../../data/logo-grid.json")
    };
  },
  computed: {
    smallGrid() {
      return this.logoGrid.logo_grid_images.slice(0, 12);
      // return this.logoGrid.logo_grid_images;
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 4rem;
  margin-top: 7rem;
}
.grid img {
  max-height: 80px;
  max-width: 120px;
  object-fit: contain;
}
.logo-wrap {
  display: flex;
  align-self: center;
  justify-content: center;
}
.mini-logo {
  height: 80px;
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
  .grid img {
    max-height: 80px;
    max-width: 160px;
    object-fit: contain;
  }
}
</style>