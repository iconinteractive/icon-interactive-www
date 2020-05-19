<template>
  <section>
    <g-image :src="fullWidthSrc" :alt="fullWidthAltText" class="full-image" />
  </section>
</template>

<script>
export default {
  props: ["fullWidthSrc", "fullWidthAltText"]
};
</script>

<style scoped>
.full-image {
  margin: 1rem 0;
  width: 100%;
}
</style>