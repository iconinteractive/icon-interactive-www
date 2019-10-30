<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <!-- <img src="../../static/icon-logo.svg" :alt="settings.site_name" class="logo" /> -->
        <div class="column">
          <h3 class="footer-text">Interested? Let's connect</h3>
          <a href="mailto:hello@iconinteractive.com">hello@iconinteractive.com</a>
          <span>© {{date}} ICON Interactive</span>
        </div>
        <div class="column">
          <ul>
            <li>Ann Arbor</li>
            <li>Boston</li>
            <li>Detroit</li>
            <li>New York</li>
          </ul>
        </div>
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
.logo {
  height: 3rem;
  fill: white;
  margin: 2% 5% 0 0;
}
.row {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
}
ul {
  list-style: none;
  text-align: right;
  font-size: 1.2rem;
  margin: 0;
}
.footer-text {
  margin: 0;
  font-size: 2rem;
}
a {
  font-size: 2rem;
  text-decoration: none;
  color: var(--color-highlight);
  margin-bottom: 0.5rem;
}
a:hover {
  transition: all 300ms ease-in;
  text-decoration: underline;
}
@media (max-width: 720px) {
  .row {
    flex-direction: column;
  }

  ul {
    margin-top: 2rem;
    text-align: left;
  }
}
</style>
