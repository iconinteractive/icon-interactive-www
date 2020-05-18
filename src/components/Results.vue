<template>
  <section class="results">
    <h1>Results</h1>
    <div class="three-column">
	    <div class="roi" v-html="resultsObj.column_one"></div>
	    <div class="roi" v-html="resultsObj.column_two"></div>
	    <div class="roi" v-html="resultsObj.column_three"></div>
	</div>
  </section>
</template>

<script>
export default {
  props: ["column_one", "column_two", "column_three", "resultsObj"]
};
</script>

<style scoped>
.results {
  margin: 1rem;
}
.three-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 4rem;
}
.roi {
  color: var(--color-highlight);
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
}
.roi :nth-child(1) {
  margin: 0;
}
</style>