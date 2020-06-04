<template>
  <section class="text-wrap margin">
    <div class="text-block" v-html="textblock" />
  </section>
</template>

<script>
export default {
  props: ["textblock"]
};
</script>

<style>
.text-wrap {
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  color: var(--color-contrast);
}
.text-block {
  width: 50%;
  font-size: 1.1rem;
  line-height: 1.6rem;
  max-width: 700px;
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
@media (max-width: 800px) {
  .text-block {
    width: 100%;
  }
}
</style>