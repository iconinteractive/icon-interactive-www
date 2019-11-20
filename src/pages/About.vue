<template>
  <Layout>
    <div class="container">
      <h1 class="title">
        ICON
        <br />
        <span class="pink">DELIVERS</span>
      </h1>
      <section class="about-text grid-two">
        <p>
          There’s an agency on every corner, but you’ll find there’s only one
          ICON. We invent and deploy digital customer experiences and interfaces
          that drive performance, value, learning, & growth.
        </p>
        <p>
          With offices in Detroit, NYC, Ann Arbor, and Boston, our team of ICONs
          is the extended team you’ve imagined. Our relentless focus on clients
          and customers - paired with an old-fashioned work ethic and the latest
          technologies - will redefine what’s possible.
          You’ve heard it all
          before? Great. Now come see it in action.
          Strategy. Design. Experiential. Web. Software.
          Let’s plug in, dream it up, and get it done.
        </p>
      </section>
      <section>
        <div class="img-wrapper">
          <g-image class="ann-arbor" :src="about.location_images.ann_arbor" alt="Ann Arbor" />
          <g-image class="new-york" :src="about.location_images.new_york" alt="New York" />
          <g-image class="boston" :src="about.location_images.boston" alt="Ann Arbor" />
          <g-image class="detroit" :src="about.location_images.detroit" alt="Detroit" />
        </div>
        <label>WHERE WE ARE</label>
        <h2>Locations</h2>
        <ul class="grid-four">
          <li class="ann-arbor-link">
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
          <li class="new-york-link">
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
          <li>
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
          <li>
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
        <label>BE ICONIC</label>
        <h2>Culture</h2>
        <div class="grid-two">
          <div>
            <g-image src="~/assets/hat.jpeg" alt="icon hat" />
            <span class="small-title">More Than A Name</span>
            <p>
              Yes, we have our core values, our mission, and our vision. More
              importantly, we’re building a team of ICONs that wants to embrace
              all of this, do right by our clients, and run into the future
              kicking a** along the way. We’re a team of talented motivated
              individuals that simultaneously crave fun, invention, success, and
              teamwork. We’re growing. Check us out and become an ICON. Your
              individuality and contributions are welcome here.
            </p>
          </div>
          <div>
            <g-image src="~/assets/dog.jpeg" alt="dog" />
            <span class="small-title">Clients, You’re Also ICONs</span>
            <p>
              Donny Deutsch said it well … ICONs move society forward. Exactly
              how we like to think of our clients. We strive to capture their
              essence. Their purpose and brand promise. We help bring these
              things to life using design and technology. Together, we’ll move
              society forward and we can’t wait to learn about you.
            </p>
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
      about: require("../../data/about.json")
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
  border-top: 1px solid var(--color-highlight);
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
.img-wrapper {
  display: flex;
  justify-content: center;
}
.img-wrapper img {
  display: none;
  width: 100%;
}

.img-wrapper .ann-arbor {
  display: block;
}

.new-york-link:hover {
  border: 1px solid greenyellow;
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
