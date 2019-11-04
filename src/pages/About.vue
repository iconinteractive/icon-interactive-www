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
        <h2>Capabilities</h2>
        <ul class="grid-four">
          <li class="project" v-for="(item,idx) in services" :key="idx">
            <label>{{idx + 1}}</label>
            <h3>{{item}}</h3>
          </li>
        </ul>
        <label>WHERE WE ARE</label>
        <h2>Locations</h2>
        <g-image src="~/assets/place.jpeg" alt="buildings" />
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
        <label>BE ICONIC</label>
        <h2>Culture</h2>
        <div class="grid-two">
          <div>
            <g-image src="~/assets/hat.jpeg" alt="icon hat" />
            <span class="small-title">FAIRCHILD IPSUM</span>
            <p>Fairchild scientists conserve tropical plants, attempting to avoid the extinction of species and their habitats. This work leads to quantifiable conservation benefits to Fairchild’s priority geographic investment regions (South Florida, Caribbean, oceanic islands, tropical Africa, and Madagascar)</p>
          </div>
          <div>
            <g-image src="~/assets/dog.jpeg" alt="dog" />
            <span class="small-title">FAIRCHILD IPSUM</span>
            <p>Fairchild scientists conserve tropical plants, attempting to avoid the extinction of species and their habitats. This work leads to quantifiable conservation benefits to Fairchild’s priority geographic investment regions (South Florida, Caribbean, oceanic islands, tropical Africa, and Madagascar)</p>
            <br />
            <span class="small-title">LET'S GET BUILDING</span>
            <h2>
              <a href="https://www.linkedin.com/company/icon-interactive">Open Roles ⟶</a>
            </h2>
          </div>
        </div>
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
.grid-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
label {
  position: relative;
  bottom: -8px;
  color: var(--color-highlight);
  background-color: var(--color-base);
  border-bottom: 1px solid var(--color-base);
  padding-right: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.small-title {
  color: var(--color-highlight);
  padding-top: 4rem;
}
h3 {
  width: 100%;
  border-top: 1px solid var(--color-highlight);
  padding-top: 32px;
  margin-bottom: 1rem;
}
h2 {
  margin-top: 10px;
}
.about-text {
  margin-left: 28%;
  max-width: 50%;
  margin-bottom: 5%;
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
img {
  margin-bottom: 1rem;
}
a {
  text-decoration: none;
  transition: all 500ms ease-in;
}
a:hover {
  text-decoration: underline;
  transition: all 500ms ease-in;
}
@media (max-width: 850px) {
  .title {
    font-size: 11vw;
  }
  .grid-four {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }
  .about-text {
    margin-left: 0;
    max-width: 90%;
  }
}
</style>


