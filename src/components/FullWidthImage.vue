<template>
  <section class="full-img-wrap" :class="{ 'margin': fullBleedToggle }">
    <g-image :src="fullWidthSrc" :alt="fullWidthAltText" class="full-image" />
  </section>
</template>

<script>
export default {
  props: ["fullWidthSrc", "fullWidthAltText", "fullBleedToggle"]
};
</script>

<style scoped>
.full-img-wrap {
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 6rem;
  /* width: auto;
  height: auto; */
}
.margin {
  margin-left: 6rem;
  margin-right: 6rem;
}
.full-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
@media (max-width: 800px) {
  .margin {
    margin: 2rem;
  }
  .full-img-wrap {
    display: block;
    justify-content: center;
  }
}
</style>