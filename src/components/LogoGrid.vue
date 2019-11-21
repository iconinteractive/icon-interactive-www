<template>
  <section class="grid">
    <div class="logo-wrap">
      <g-image src="~/assets/logos/audi.jpg" alt="audi logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/beaste-boys.png" alt="beastie boys logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/bmw.svg" alt="bmw logo" class="mini-logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/bonnaroo.png" alt="bonnaroo logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/jlo.svg" alt="jlo logo" class="mini-logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/katy.png" alt="katy logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/land-rover.png" alt="land rover logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/nissan.svg" alt="nissan logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/panasonic.jpg" alt="panasonic logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/phish.jpg" alt="phish logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/siriusxm.jpg" alt="siriusxm logo" />
    </div>
    <div class="logo-wrap">
      <g-image src="~/assets/logos/toyota.png" alt="toyota logo" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      about: require("../../data/logo-grid.json")
    };
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 2rem;
}
.grid img {
  max-height: 120px;
  max-width: 120px;
  object-fit: contain;
}
.logo-wrap {
  display: flex;
  align-self: center;
}
.mini-logo {
  height: 80px;
}
</style>