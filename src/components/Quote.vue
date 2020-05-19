<template>
  <section class="quote-block">
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

<style>
.quote-block {
  display: flex;
  justify-content: center;
}
blockquote {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: var(--color-contrast);
  padding-left: 1rem;
  margin: 6.5rem 0;
  width: 70%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
blockquote p > em {
  color: var(--color-highlight);
  font-size: 1.1rem;
}
blockquote p {
  margin-top: 0;
}
@media (max-width: 800px) {
  blockquote {
    width: 90%;
  }
}
</style>