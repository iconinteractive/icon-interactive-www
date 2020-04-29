<template>
  <Layout>
    <div class="container">
      <h1 class="title">
        ICON
        <br />
        <span class="pink">DELIVERS</span>
      </h1>
      <section class="about-text grid-two">
        <div v-html="about.about_text.left_column" />
        <div v-html="about.about_text.right_column" />
      </section>
      <section>
        <label>{{ about.culture.subtitle }}</label>
        <h2>{{ about.culture.title }}</h2>
        <div class="grid-two">
          <div>
            <g-image :src="about.culture.left_column_image" alt="icon culture image" />
            <span class="small-title">
              {{
              about.culture.left_column_section_title
              }}
            </span>
            <div v-html="about.culture.left_column_text" />
          </div>
          <div>
            <g-image :src="about.culture.right_column_image" alt="dog" />
            <span class="small-title">
              {{
              about.culture.right_column_section_title
              }}
            </span>
            <div v-html="about.culture.right_column_text" />
            <g-link class="nav__link" to="/careers">
              <h2>Open Roles ⟶</h2>
            </g-link>
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
      about: require("../../data/about.json"),
      currentImg: ""
    };
  },
  mounted() {
    this.currentImg = this.about.location_images.ann_arbor;
  },
  methods: {
    swapImg(city) {
      switch (city) {
        case "annArbor":
          this.currentImg = this.about.location_images.ann_arbor;
          break;
        case "nyc":
          this.currentImg = this.about.location_images.new_york;
          break;
        case "boston":
          this.currentImg = this.about.location_images.boston;
          break;
        case "detroit":
          this.currentImg = this.about.location_images.detroit;
          break;
      }
    }
  }
};
</script>

<style scoped>
li {
  border: 1px solid transparent;
  border-top: 1px solid var(--color-highlight);
  margin: 0rem;
  padding-left: 1rem;
  transition: all 500ms ease-in-out;
}
li:hover {
  transition: all 500ms ease-in-out;
  text-decoration: underline;
}
h2 {
  margin: 2rem 0;
}
.grid-four {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
  list-style: none;
  padding: 0;
}
.grid-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  list-style: none;
  padding: 0;
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
  padding-top: 32px;
  margin-bottom: 1rem;
}
h2 {
  margin-top: 10px;
}
.about-text {
  margin: 0 auto;
  max-width: 100%;
  margin-bottom: 5%;
  font-size: 1.2rem;
}
.title {
  font-weight: 700;
  padding: 0;
  margin: 4rem 0 2rem;
}
.pink {
  color: var(--color-highlight);
}
.img-wrapper {
  display: flex;
  justify-content: center;
}
img {
  margin-bottom: 1rem;
}
li a {
  text-decoration: none;
  transition: all 500ms ease-in;
}
li a:hover {
  text-decoration: underline;
  transition: all 500ms ease-in;
}
li a > p {
  text-decoration: none;
}
.services p {
  font-size: 1.2rem;
}
.grid-two p {
  font-size: 1.2rem;
}
.location-imgs {
  width: 100%;
}

@media (max-width: 800px) {
  li {
    padding: 0;
  }
  .grid-four {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
  .grid-two {
    grid-template-columns: 1fr;
  }
  .about-text {
    margin-left: 0;
    max-width: 90%;
  }
  .img-wrapper {
    display: none;
  }
}
</style>
