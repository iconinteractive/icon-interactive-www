<template>
  <section>
    <h1>Results</h1>
    <div class="results column_one" v-html="column_one"></div>
    <div class="results column_two" v-html="column_two"></div>
    <div class="results column_three" v-html="column_three"></div>
  </section>
</template>

<script>
export default {
  props: ["column_one", "column_two", "column_three"]
};
</script>

<style scoped>
.results {
  margin: 1rem;
}
</style>