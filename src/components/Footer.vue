<template>
  <footer class="footer">
    <div class="container">
      <div class="column">
        <g-link to="/contact">Let's connect</g-link>
        <ul>
          <li>Ann Arbor</li>
          <li>Boston</li>
          <li>Detroit</li>
          <li>New York</li>
        </ul>
        <span>© {{date}} ICON Interactive</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../../static/icon-logo.svg"),
      settings: require("../../data/theme.json"),
      date: "",
      footer: require("../../data/footer.json")
    };
  },
  mounted() {
    this.date = new Date().getFullYear();
  }
};
</script>

<style scoped>
.footer {
  font-size: 1rem;
  padding: 6rem 0;
}
.column {
  display: flex;
  flex-direction: column;
}
ul {
  list-style: none;
  text-align: left;
  font-size: 1.4rem;
  margin: 0 0 1rem;
  padding: 0;
}
.footer-text {
  font-weight: normal;
  margin: 0;
}
a {
  font-size: 2rem;
  text-decoration: none;
  color: var(--color-highlight);
}
a:hover {
  transition: all 300ms ease-in;
  text-decoration: underline;
}
a:last-of-type {
  margin-bottom: 0.5rem;
}
@media (max-width: 800px) {
}
</style>
