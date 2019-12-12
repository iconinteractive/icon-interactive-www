<template>
  <section>
    <Layout>
      <div class="container">
        <Hero :copyArr="home.home_typer.type_text_list" />
        <div class="description">
          <p>{{home.home_text}}</p>
          <button class="start-button" @click="scrollDown">↓</button>
        </div>
        <section id="start" class="projects">
          <div class="title-wrap">
            <h1 class="title">FEATURED WORK</h1>
          </div>
          <ProjectsGrid :projects="$page.projects.edges" />
        </section>
      </div>
    </Layout>
  </section>
</template>

<page-query>
query Posts {
	projects: allProjectPost (filter: {display_on_home_page: {eq: true}, display_on_site: {eq: true}}) {
    edges{
      node {
        id
        date (format: "YYYY")
        title
        thumbnail
        path
        client
        display_on_home_page
        display_on_site
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";

export default {
  components: {
    Hero,
    ProjectsGrid
  },
  data() {
    return {
      home: require("../../data/theme.json")
    };
  },
  methods: {
    scrollDown() {
      if (process.isClient) {
        const top = document.querySelector("#start");
        top.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 5.5rem;
  margin-bottom: 0;
  line-height: 5rem;
}
.title-wrap {
  text-align: center;
}
h2 {
  font-family: "DM Sans";
  padding: 1rem;
  border: 2px solid var(--color-highlight);
  color: var(--color-highlight);
  border-radius: 0.3rem;
}
.projects {
  padding-top: 50px;
}
.description {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 8vw;
  font-size: 1.4rem;
  padding-left: 125px;
  width: 100%;
  height: 20vh;
  margin: 15vh 0;
}

.description p {
  margin: 0;
}

.home-label {
  letter-spacing: 2px;
  font-weight: bold;
}

.start-button {
  background: var(--color-base);
  color: var(--color-highlight);
  border: 1px solid var(--color-highlight);
  z-index: 10;
  cursor: pointer;
  font-size: 2rem;
  z-index: 0;
  border-radius: 0.3rem;
  width: 50px;
  height: 50px;
  align-items: right;
  justify-self: end;
}
.start-button:hover {
  background: var(--color-highlight);
  color: var(--color-contrast);
  transition: all 300ms ease-in-out;
}
@media (max-width: 800px) {
  .start-button {
    justify-self: start;
    margin-top: 2rem;
  }
  .description {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 0;
    margin: 8vh 0;
  }
  .title {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 0;
  }
  .title-wrap {
    text-align: left;
  }
}
</style>
