<template>
  <footer class="footer">
    <div class="container">
      <div class="grid">
        <div class="row">
          <img src="../../static/icon-logo.svg" :alt="settings.site_name" class="logo" />
          <div class="column">
            <span class="footer-text">Interested? Let's connect</span>
            <a href="mailto:hello@iconinteractive.com">hello@iconinteractive.com</a>
            <span>© {{date}} ICON Interactive</span>
          </div>
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
.grid {
  display: grid;
  grid-template-columns: 6fr 2fr;
}
.row {
  display: flex;
  flex-direction: row;
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
  font-weight: normal;
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
  .logo {
    display: none;
  }
  .row {
    flex-direction: column;
    align-content: left;
  }
  .grid {
    grid-template-columns: 1fr;
  }

  ul {
    margin-top: 2rem;
    text-align: left;
  }
}
</style>
