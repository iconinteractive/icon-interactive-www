<template>
  <footer class="footer">
    <div class="container">
      <span>Copyright © {{date}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      date: ""
    };
  },
  mounted() {
    this.date = new Date().getFullYear();
  }
};
</script>

<style scoped>
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>
