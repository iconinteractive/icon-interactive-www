<template>
  <section class="results">
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
  margin: 1rem 10%;
  width: 80%;
}
.three-column {
  display: flex;
  justify-content: space-around;
}
.roi {
  color: var(--color-highlight);
  display: flex;
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
    flex-direction: column;
  }
}
</style>