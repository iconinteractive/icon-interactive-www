<template>
  <section class="quote-block margin">
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
  font-size: 1.4rem;
  line-height: 2rem;
  color: var(--color-contrast);
  margin: 8.5rem 0;
  width: 70%;
  max-width: 700px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
blockquote p > em {
  color: var(--color-highlight);
  font-size: 1.1rem;
  line-height: 1.6rem;
}
blockquote p {
  margin-top: 0;
}
@media (max-width: 800px) {
  blockquote {
    width: 100%;
    margin: 4.5rem 0;
  }
  blockquote p > em {
    line-height: 1rem;
  }
}
</style>