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
  font-size: 2rem;
  color: var(--color-contrast);
  padding-left: 1rem;
  border-left: 1px solid var(--color-highlight);
  margin: 6.5rem 0;
}
blockquote p {
  font-size: 2rem;
  color: var(--color-highlight);
  border-bottom: 1px solid #fff;
}
</style>