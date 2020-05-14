<template>
  <section>
    <h1>Quote</h1>
    <blockquote v-html="quote" />
  </section>
</template>

<script>
export default {
  props: {
    quote: String
  }
};
</script>

<style scoped>
blockquote {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: var(--color-contrast);
  padding-left: 1rem;
  margin: 6.5rem 0;
  width: 80%;
}
</style>