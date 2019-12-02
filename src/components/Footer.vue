<template>
  <footer class="footer">
    <div class="container">
      <div class="grid">
        <div class="row">
          <img src="../../static/icon-logo.svg" :alt="settings.site_name" class="logo-footer" />
          <div class="column">
            <span class="footer-text">{{footer.footer_text}}</span>
            <a href="mailto:info@iconinteractive.com">Let's connect</a>
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
  font-size: 0.8rem;
  padding: 6rem 0;
}
.logo-footer {
  height: 65px;
  fill: white;
  margin: 5% 5% 5% 0;
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
}
a:hover {
  transition: all 300ms ease-in;
  text-decoration: underline;
}
a:last-of-type {
  margin-bottom: 0.5rem;
}
@media (max-width: 800px) {
  .logo-footer {
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
    padding: 0;
  }
  a {
    font-size: 1.5rem;
  }
  .footer-text {
    font-size: 1.5rem;
  }
}
</style>
