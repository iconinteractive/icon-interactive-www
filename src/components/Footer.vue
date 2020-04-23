<template>
  <footer class="footer">
    <div class="container">
      <section class="connect-row">
        <img src="../../static/icon-logo.svg" alt="icon logo" class="logo" />
        <g-link to="/connect" :class="{ hide: this.$route.path.includes('/connect') }">
          <h3 class="connect">Let's connect</h3>
        </g-link>
      </section>
      <section class="connect-wrap">
        <ul :class="{ hide: this.$route.path.includes('/about') }">
          <li>
            <g-link to="/connect">
              <h3 class="city">Ann Arbor</h3>
            </g-link>
          </li>
          <li>
            <g-link to="/connect">
              <h3 class="city">Boston</h3>
            </g-link>
          </li>
          <li>
            <g-link to="/connect">
              <h3 class="city">Brisbane</h3>
            </g-link>
          </li>
          <li>
            <g-link to="/connect">
              <h3 class="city">New York</h3>
            </g-link>
          </li>
          <li>
            <g-link to="/connect">
              <h3 class="city">Detroit</h3>
            </g-link>
          </li>
        </ul>
        <p class="copyright">© {{ date }} ICON Interactive</p>
      </section>
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
  padding: 5rem 0 1rem;
}
.container {
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
  border-top: 1px solid rgba(53, 53, 53, 0.7);
}
.connect:hover {
  color: var(--color-highlight);
  transition: all 1s ease-in;
  text-decoration: underline;
}
.city {
  margin: 0;
}
.logo {
  height: 40px;
  fill: white;
  transition: all 1s ease-in-out;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-top: 0;
  width: 100%;
  height: 40px;
}
li {
  margin-right: 2rem;
}
li:last-of-type {
  margin-right: 0;
}
h3 {
  font-size: 1.2rem;
  color: var(--color-contrast);
  transition: all 1s ease-in-out;
}
h3:hover {
  transition: all 1s ease-in-out;
  text-decoration: underline;
  color: var(--color-highlight);
}
.address {
  opacity: 0;
  transition: all 1s ease-in-out;
  color: var(--color-highlight);
  text-align: left;
  margin: 0 auto;
}
.city:hover + .address {
  opacity: 1;
  transition: all 1s ease-in-out;
}
.footer-text {
  font-weight: normal;
  margin: 0;
}
.copyright {
  font-size: 0.85rem;
  margin-top: 0.5rem;
  text-align: right;
}
.connect-wrap {
  display: flex;
  flex-direction: column;
}
.connect-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.connect {
  font-family: "DM Sans";
  font-size: 1.5rem;
  font-weight: normal;
  color: var(--color-highlight);
  margin: 0 0 0 2rem;
  letter-spacing: 0;
  width: 100%;
}
.hide {
  display: none;
}
@media (max-width: 1000px) {
  .footer {
    font-size: 1rem;
    padding: 4rem 0 1rem;
  }
  .container {
    flex-direction: column;
  }
  ul {
    flex-direction: column;
    padding-left: 0;
    margin-top: 1rem;
  }
  .connect-wrap {
    width: 100%;
  }
  .address {
    display: none;
  }
}
</style>
