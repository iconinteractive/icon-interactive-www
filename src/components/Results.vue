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
  props: ["resultsObj"]
};
</script>

<style>
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
  align-content: center;
  text-align: left;
  padding: 1rem;
}
.roi :nth-child(1) {
  margin: 0;
}
.roi > h1,
.roi > h2,
.roi > h3,
.roi > h4,
.roi > h5,
.roi > h6 {
  font-family: "DM Sans", sans-serif;
}
.roi > p {
  color: var(--color-contrast);
  margin-top: 0;
}

@media (max-width: 800px) {
  .three-column {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>