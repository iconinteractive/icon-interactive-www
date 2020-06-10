<template>
  <footer class="footer">
    <div class="container margin">
      <section class="connect-row">
        <img src="../../static/icon-logo.svg" alt="icon logo" class="logo" />
        <g-link to="/connect">
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
              <h3 class="city">Detroit</h3>
            </g-link>
          </li>
          <li>
            <g-link to="/connect">
              <h3 class="city">New York</h3>
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
  padding: 2.5rem 0 4rem;
  background-color: #000;
}
.container {
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  border-top: 1px solid rgba(53, 53, 53, 0.7);
}
a .city {
  margin: 0;
  font-size: 0.9rem;
  font-weight: normal;
  transition: all 300ms ease-in-out;
}
a .city:hover {
  color: var(--color-highlight);
  transition: all 300ms ease-in-out;
}
.logo {
  height: 35px;
  fill: white;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
  height: 40px;
}
li {
  margin-right: 2rem;
}
li:last-of-type {
  margin-right: 0;
}
li a h3 {
  color: #fff;
}
.footer-text {
  font-weight: normal;
  margin: 0;
}
.copyright {
  font-size: 0.7rem;
  margin-top: 1.25rem;
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
.connect-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.connect {
  font-family: "DM Sans";
  font-size: 1.4rem;
  font-weight: normal;
  color: var(--color-highlight);
  margin: 0 0 0 2rem;
  letter-spacing: 0;
  width: 100%;
  white-space: nowrap;
}

@media (max-width: 1200px) {
  .footer {
    font-size: 1rem;
    padding: 4rem 0 1rem;
  }
  .container {
    padding-top: 2rem;
    flex-direction: column;
  }
  ul {
    flex-direction: column;
    padding-left: 0;
    align-items: flex-start;
    height: 100%;
  }
  .connect {
    margin: 1.5rem 0;
  }
  .copyright {
    text-align: left;
  }
  .connect-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .connect-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }
  li {
    margin: 0.75rem 0;
  }
  li:first-child {
    margin-top: 0;
  }
}
</style>
