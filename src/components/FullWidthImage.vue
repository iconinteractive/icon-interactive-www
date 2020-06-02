<template>
  <section>
    <g-image :src="fullWidthSrc" :alt="fullWidthAltText" class="full-image" :class="{ margin: fullBleedToggle }" />
  </section>
</template>

<script>
export default {
  props: ["fullWidthSrc", "fullWidthAltText", "fullBleedToggle"]
};
</script>

<style scoped>
.full-image {
  margin: 3rem 0;
  width: 100%;
}
</style>