<template>
  <Layout>
    <div class="container">
      <section class="flex">
        <div>
          <label>LET'S CONNECT</label>
          <h2>
            <a href="mailto:hello@iconinteractive.com">⟶ Email</a>
          </h2>
          <h2>
            <a href="tel:7347079245">⟶ 734.707.9245</a>
          </h2>
          <ul class="grid-two">
            <li>
              <h3>Ann Arbor</h3>
              <p>
                220 Felch St
                <br />Ann Arbor, MI 48103
              </p>
            </li>
            <li>
              <h3>New York</h3>
              <p>
                180 Varick St
                <br />Suite 912
                <br />New York, NY 1004
              </p>
            </li>
            <li>
              <h3>Boston</h3>
              <p>
                129 Kingston St
                <br />Floor 2
                <br />Boston, MA 02111
              </p>
            </li>
            <li>
              <h3>Detroit</h3>
              <p>
                1442 Brush St
                <br />Floor 3
                <br />Detroit, MI 48226
              </p>
            </li>
          </ul>
        </div>
        <div class="mail-link-container">
          <a href="mailto:hello@iconinteractive" class="email">
            hello
            <br />
            <span class="pink">@</span>icon
            <br />inter
            <br />active
            <br />.com
          </a>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  methods: {
    openEmail() {
      window.location.href = "mailto:mail@example.org";
    }
  }
};
</script>

<style scoped>
.flex {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
}
.pink {
  color: var(--color-highlight);
}
.email {
  font-family: "Archivo Black", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12vh;
  transition: all 5s ease-in-out;
}
.email:hover {
  transition: all 5s ease-in-out;
  filter: hue-rotate(360deg);
}
a {
  display: block;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  transition: all 300ms ease-in;
}
label {
  color: var(--color-highlight);
}
h2 {
  margin: 0.8rem 0;
}
h3 {
  margin-bottom: 1rem;
}

.grid-two {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 0.5rem;
}
.mail-link-container {
  height: 100%;

  text-align: right;
}
</style>

