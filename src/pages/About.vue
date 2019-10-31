<template>
  <Layout>
    <div class="container">
      <h1 class="title">
        ICON
        <br />
        <span class="pink">DELIVERS</span>
      </h1>
      <section>
        <p
          class="about-text"
        >ICON Interactive is a full-service digital agency that represents the merger of extraordinary design and powerful technology. Each initiative, each project, receives the full weight of both sides of the brain, rendering beautiful imagery that engages the eye, and functional control that gives real purpose.</p>
      </section>
      <section>
        <label>WHAT WE DO</label>
        <h2 class="title-sticky">Capabilities</h2>
        <ul class="grid-four">
          <li class="project" v-for="(item,idx) in services" :key="idx">
            <label>{{idx + 1}}</label>
            <h3>{{item}}</h3>
          </li>
        </ul>
        <label>WHERE WE ARE</label>
        <h2 class="title-sticky">Locations</h2>
        <ul class="grid-four">
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
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      services: [
        "Branding",
        "Concepting",
        "AR/VR",
        "Development",
        "Experiential",
        "Full Stack",
        "Graphic Design",
        "Interactive",
        "Jelly Making",
        "Kit Production",
        "Lighting",
        "Mapping",
        "Notation",
        "Pizza"
      ]
    };
  }
};
</script>

<style scoped>
li {
  margin: 0rem;
  padding-left: 0.5rem;
}
h2 {
  margin: 2rem 0;
}
.grid-four {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 4rem;
}
label {
  position: relative;
  bottom: -8px;
  color: var(--color-highlight);
  background-color: var(--color-base);
  border-bottom: 1px solid var(--color-base);
  padding-right: 1rem;
}
h3 {
  width: 100%;
  border-top: 1px solid var(--color-highlight);
  margin-top: 2px;
}
h2 {
  margin-top: 10px;
}
label {
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.about-text {
  margin-left: 28%;
  max-width: 50%;
}
.title {
  font-size: 7rem;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 0;
  margin: 4rem 0 2rem;
}
.pink {
  color: var(--color-highlight);
}
@media (max-width: 850px) {
  .grid-four {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }
}
</style>


