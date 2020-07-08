<template>
  <article>
    <section class="two-column">
      <h2 v-if="textColumns.left_column_title">
        {{ textColumns.left_column_title }}
      </h2>
      <h2 v-if="textColumns.right_column_title">
        {{ textColumns.right_column_title }}
      </h2>
    </section>
    <section class="two-column">
      <div class="text-block" v-html="textColumns.left_column" />
      <div class="text-block" v-html="textColumns.right_column" />
    </section>
  </article>
</template>

<script>
export default {
  props: ["textColumns"],
}
</script>

<style scoped>
article {
  max-width: 1100px;
  margin: 0 auto;
}
.two-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  grid-template-rows: auto;
  margin: 0;
}
.text-block {
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: var(--color-contrast);
  width: 100%;
}
h2 {
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: var(--color-highlight);
  font-size: 1.3rem;
  margin: 1rem 0 0;
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
  margin: 0.25rem 0;
}
ul {
  padding-left: 20px;
  margin: 0;
}

@media (max-width: 800px) {
  article {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  .margin {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .two-column {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
}
</style>
