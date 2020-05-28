<template>
  <Layout>
    <div class="container">
      <h1 class="title">
        LET'S
        <br />
        <span class="pink">CONNECT</span>
      </h1>
      <article class="contact row">
        <ContactForm />
        <section class="contact-wrapper">
          <p class="pink-label">CALL</p>
          <a class="link" href="tel:7347079245">734.707.9245</a>
          <p class="pink-label">EMAIL</p>
          <a class="link" href="mailto:info@iconinteractive.com">info@iconinteractive.com</a>
          <p class="pink-label locations">LOCATIONS</p>
          <section class="grid-two">
            <div>
              <a
                href="https://www.google.com/maps/place/220+Felch+St,+Ann+Arbor,+MI+48103/@42.2865635,-83.7524387,17z/data=!3m1!4b1!4m5!3m4!1s0x883cae173e5563cb:0x3ac7229f72eca0ff!8m2!3d42.2865635!4d-83.75025"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Ann Arbor</h3>
              </a>
              <p class="address">
                220 Felch St
                <br />Ann Arbor, MI 48103
              </p>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/129+Kingston+St,+Boston,+MA+02111/@42.3519084,-71.0617181,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a787aa897a7:0x86a64b1d163a1c9f!8m2!3d42.3519045!4d-71.0595241"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Boston</h3>
              </a>
              <p class="address">
                129 Kingston St, Floor 2
                <br />Boston, MA 02111
              </p>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/The+Precinct/@-27.4786026,153.0117087,17z/data=!4m8!1m2!2m1!1sThe+Precinct,+Unit+S5+12+Browning+Street+West+End+QLD+4101!3m4!1s0x6b9150a0bb6ef0eb:0x8aec3d445dc26317!8m2!3d-27.4786026!4d153.0138974"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Brisbane</h3>
              </a>
              <p class="address">
                S5, 12 Browning St
                <br />West End QLD 4101
              </p>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/1442+Brush+St,+Detroit,+MI+48226/@42.3366768,-83.0471208,17z/data=!3m1!4b1!4m5!3m4!1s0x883b2d2db83747e9:0x1d05b9954d24bba8!8m2!3d42.3366729!4d-83.0449268"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Detroit</h3>
              </a>
              <p class="address">
                1442 Brush St, Floor 3
                <br />Detroit, MI 48226
              </p>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/180+Varick+St,+New+York,+NY+10014/@40.7273984,-74.0073664,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598d40361245:0x984a7b0697ab5c73!8m2!3d40.7273984!4d-74.0051777"
                target="_blank"
                rel="noreferrer"
              >
                <h3>New York</h3>
              </a>
              <p class="address">
                180 Varick St, Suite 912
                <br />New York, NY 10014
              </p>
            </div>
          </section>
        </section>
      </article>
    </div>
  </Layout>
</template>

<script>
import ContactForm from "../components/ContactForm";

export default {
  components: {
    ContactForm
  },
  data() {
    return {
      contact: require("../../data/contact.json")
    };
  }
};
</script>

<style scoped>
p {
  font-size: 1.2rem;
}
.contact {
  margin-right: 0%;
  width: 100%;
}
.contact-header {
  padding: 2rem 0 4rem 0;
}
.label {
  font-family: "Archivo Black", "DM Sans", helvetica;
  font-size: 2rem;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.row {
  display: flex;
  flex-direction: row;
}
.pink-label {
  position: relative;
  bottom: -8px;
  color: var(--color-highlight);
  background-color: var(--color-base);
  border-bottom: 1px solid var(--color-base);
  padding-right: 1rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-top: 3rem;
}
.pink-label:first-child {
  margin-top: 15px;
}
.contact-wrapper {
  margin: 0 0 0 8rem;
}
.link {
  font-family: "Archivo Black", "DM Sans", helvetica, sans-serif;
  font-size: 1.75rem;
}
.contact div {
  margin-bottom: 2rem;
}
.grid-two div {
  margin-bottom: 1rem;
}
.address {
  margin: 0;
}
h3 {
  margin-bottom: 0.5rem;
}
.grid-two {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0;
}
.locations {
  margin-bottom: 0;
}

@media (min-width: 1610px) {
  .grid-two {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1100px) {
  .row {
    display: flex;
    flex-direction: column;
  }
  .contact-wrapper {
    margin: 2rem 0 0;
  }
  .grid-two {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 880px) {
  .contact {
    margin: 0;
  }
  .link {
    font-size: 1.3rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  .button:hover {
    background: var(--color-base);
    color: var(--color-highlight);
  }
  .grid-two {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .grid-two {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
