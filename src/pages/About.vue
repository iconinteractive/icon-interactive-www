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
        <label>{{about.culture.subtitle}}</label>
        <h2>{{about.culture.title}}</h2>
        <div class="grid-two">
          <div>
            <g-image :src="about.culture.left_column_image" alt="icon culture image" />
            <span class="small-title">{{about.culture.left_column_section_title}}</span>
            <div v-html="about.culture.left_column_text" />
          </div>
          <div>
            <g-image :src="about.culture.right_column_image" alt="dog" />
            <span class="small-title">{{about.culture.right_column_section_title}}</span>
            <div v-html="about.culture.right_column_text" />
            <br />
            <span class="small-title">{{about.culture.careers_title}}</span>
            <div class="careers-link" v-html="about.culture.careers_link" />
          </div>
        </div>
        <label>{{about.location_images.subtitle}}</label>
        <h2>{{about.location_images.title}}</h2>
        <div class="img-wrapper">
          <g-image :src="currentImg" alt="icon locations" />
        </div>
        <ul class="grid-four">
          <li @mouseover="swapImg('annArbor')">
            <a
              href="https://www.google.com/maps/place/220+Felch+St,+Ann+Arbor,+MI+48103/@42.2865635,-83.7524387,17z/data=!3m1!4b1!4m5!3m4!1s0x883cae173e5563cb:0x3ac7229f72eca0ff!8m2!3d42.2865635!4d-83.75025"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Ann Arbor</h3>
              <p>
                220 Felch St
                <br />Ann Arbor, MI 48103
              </p>
            </a>
          </li>
          <li @mouseover="swapImg('nyc')">
            <a
              href="https://www.google.com/maps/place/180+Varick+St,+New+York,+NY+10014/@40.7273984,-74.0073664,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598d40361245:0x984a7b0697ab5c73!8m2!3d40.7273984!4d-74.0051777"
              target="_blank"
              rel="noreferrer"
            >
              <h3>New York</h3>
              <p>
                180 Varick St
                <br />Suite 912
                <br />New York, NY 1004
              </p>
            </a>
          </li>
          <li @mouseover="swapImg('boston')">
            <a
              href="https://www.google.com/maps/place/129+Kingston+St,+Boston,+MA+02111/@42.3519084,-71.0617181,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a787aa897a7:0x86a64b1d163a1c9f!8m2!3d42.3519045!4d-71.0595241"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Boston</h3>
              <p>
                129 Kingston St
                <br />Floor 2
                <br />Boston, MA 02111
              </p>
            </a>
          </li>
          <li @mouseover="swapImg('detroit')">
            <a
              href="https://www.google.com/maps/place/1442+Brush+St,+Detroit,+MI+48226/@42.3366768,-83.0471208,17z/data=!3m1!4b1!4m5!3m4!1s0x883b2d2db83747e9:0x1d05b9954d24bba8!8m2!3d42.3366729!4d-83.0449268"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Detroit</h3>
              <p>
                1442 Brush St
                <br />Floor 3
                <br />Detroit, MI 48226
              </p>
            </a>
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
  border-bottom: 1px solid var(--color-highlight);
  border-left: 1px solid var(--color-highlight);
  border-top: 1px solid transparent;
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
  transition: all 500ms ease-in;
}

.services p {
  font-size: 1.2rem;
}

.grid-two p {
  font-size: 1.2rem;
}
@media (max-width: 850px) {
  .title {
    font-size: 11vw;
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
}
</style>
