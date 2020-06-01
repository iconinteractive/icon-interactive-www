<template>
  <section class="two-column margin">
    <g-image :src="twoColImages.image_one" :alt="twoColImages.image_one_alt_text" />
    <g-image :src="twoColImages.image_two" :alt="twoColImages.image_two_alt_text" />
  </section>
</template>

<script>
export default {
  props: ["twoColImages"]
};
</script>

<style scoped>
.two-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-template-rows: auto;
}
@media (max-width: 800px) {
  .two-column {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
}
</style>