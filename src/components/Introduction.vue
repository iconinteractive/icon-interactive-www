<template>
  <section>
    <h1>Intro</h1>
    <p>{{ data.client }}</p>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style scoped>
</style>