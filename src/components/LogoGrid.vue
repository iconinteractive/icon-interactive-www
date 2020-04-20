<template>
  <section class="grid">
    <div class="logo-wrap" v-for="(imageUrl, idx) in computedGrid" :key="idx">
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
    computedGrid() {
      if (this.$route.path === "/clients" || this.$route.path === "/clients/") {
        return this.logoGrid.logo_grid_images;
      } else {
        return this.logoGrid.logo_grid_images.slice(0, 12);
      }
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 70px;
  justify-items: center;
  grid-gap: 4rem;
  margin-top: 7rem;
}
.grid img {
  max-height: 65px;
  max-width: 130px;
  object-fit: contain;
}
/* amgen */
.grid div:nth-child(1) img {
  max-height: 28px;
}
/* aptiv */
.grid div:nth-child(3) img {
  max-width: 160px;
}
/* audi*/
.grid div:nth-child(4) img {
  max-width: 110px;
}
/* gatorade */
.grid div:nth-child(9) img {
  max-height: 50px;
}
/* jlo */
.grid div:nth-child(11) img {
  max-height: 58px;
}
/* mtv */
.grid div:nth-child(13) img {
  height: 50px;
}
/* nw mutual */
.grid div:nth-child(14) img {
  max-width: 190px;
}
/* pem museum */
.grid div:nth-child(17) img {
  max-width: 114px;
}
/* toyota */
.grid div:nth-child(22) img {
  max-height: 80px;
}
/* village green */
.grid div:nth-child(23) img {
  max-width: 145px;
}
/* univ of michigan */
.grid div:nth-child(24) img {
  max-height: 80px;
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