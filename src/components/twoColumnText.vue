<template>
  <section class="two-column margin">
    <div class="text-block" v-html="textColumns.left_column" />
    <div class="text-block" v-html="textColumns.right_column" />
  </section>
</template>

<script>
export default {
  props: ["textColumns"]
};
</script>

<style scoped>
.two-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  grid-template-rows: auto;
  margin: 5rem 0;
}
.text-block {
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: var(--color-contrast);
  width: 100%;
}
.text-block h1,
.text-block h2,
.text-block h3,
.text-block h4,
.text-block h5,
.text-block h6 {
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: var(--color-highlight);
  font-size: 1.3rem;
  margin: 1rem 0 0;
}
.text-block p {
  margin: 0.5rem 0 2rem;
}
ul {
  padding-left: 20px;
  margin: 0;
}
.margin {
  margin-left: 6rem;
  margin-right: 6rem;
}
@media (max-width: 800px) {
  h1 {
    font-size: 1.5rem;
  }
  .margin {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .two-column {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
}
</style>