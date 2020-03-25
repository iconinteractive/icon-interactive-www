<template>
  <footer class="footer">
    <div class="container">
      <div class="connect-wrap">
        <g-link to="/connect" :class="{ hide: this.$route.path.includes('/connect') }">
          <h3 class="connect">Let's connect</h3>
        </g-link>
        <p class="copyright">© {{ date }} ICON Interactive</p>
      </div>
      <ul :class="{ hide: this.$route.path.includes('/about') }">
        <li>
          <a
            href="https://www.google.com/maps/place/220+Felch+St,+Ann+Arbor,+MI+48103/@42.2865635,-83.7524387,17z/data=!3m1!4b1!4m5!3m4!1s0x883cae173e5563cb:0x3ac7229f72eca0ff!8m2!3d42.2865635!4d-83.75025"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="city">Ann Arbor</h3>
            <p class="address">
              220 Felch St
              <br />Ann Arbor, MI
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/180+Varick+St,+New+York,+NY+10014/@40.7273984,-74.0073664,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598d40361245:0x984a7b0697ab5c73!8m2!3d40.7273984!4d-74.0051777"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="city">New York</h3>
            <p class="address">
              180 Varick St
              <br />Suite 912
              <br />New York, NY
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/129+Kingston+St,+Boston,+MA+02111/@42.3519084,-71.0617181,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a787aa897a7:0x86a64b1d163a1c9f!8m2!3d42.3519045!4d-71.0595241"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="city">Boston</h3>
            <p class="address">
              129 Kingston St
              <br />Floor 2
              <br />Boston, MA
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/1442+Brush+St,+Detroit,+MI+48226/@42.3366768,-83.0471208,17z/data=!3m1!4b1!4m5!3m4!1s0x883b2d2db83747e9:0x1d05b9954d24bba8!8m2!3d42.3366729!4d-83.0449268"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="city">Detroit</h3>
            <p class="address">
              1442 Brush St
              <br />Floor 3
              <br />Detroit, MI
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/12+Browning+St,+South+Brisbane+QLD+4101,+Australia/@-27.4784248,153.0116033,17z/data=!3m1!4b1!4m5!3m4!1s0x6b9150a0ba86145d:0xdf8b5967b7943aa3!8m2!3d-27.4784248!4d153.013792"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="city">Brisbane</h3>
            <p class="address">
              Brisbane City 
              <br />
              QLD 4101
              <br />Australia
            </p>
          </a>
        </li>
      </ul>
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
  padding: 10rem 0 1rem;
}
.container {
  display: flex;
}
a {
  font-size: 2rem;
  text-decoration: none;
  color: var(--color-highlight);
}
.connect:hover {
  color: var(--color-highlight);
  transition: all 1s ease-in;
  text-decoration: underline;
}
.city {
  margin: 0 0 1rem;
}
ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-top: 0;
  width: 80%;
}
li {
  margin-right: 2rem;
}
li:nth-child(3) {
  margin-right: 1rem;
}
li:last-of-type {
  margin-right: 0;
}
li p {
  font-size: 1rem;
}
h3 {
  font-size: 1.5rem;
  color: var(--color-contrast);
  transition: all 1s ease-in-out;
}
h3:hover {
  color: var(--color-contrast);
  transition: all 1s ease-in-out;
  text-decoration: underline;
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
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
.connect-wrap {
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 0 10% 0 0;
}
.connect {
  font-family: "DM Sans";
  font-size: 1.5rem;
  font-weight: normal;
  color: var(--color-highlight);
  margin: 0;
  letter-spacing: 0;
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
