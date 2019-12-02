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
          <label class="pink home-label">FEATURED WORK</label>
          <ProjectsGrid :projects="$page.projects.edges" />
        </section>
      </div>
    </Layout>
  </section>
</template>

<page-query>
query Posts {
	projects: allProjectPost (filter: {display_on_home_page: {eq: true}}){
    edges{
      node {
        id
        date (format: "YYYY")
        title
        thumbnail
        path
        display_on_home_page
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
h1 {
  margin-top: 10vh;
  border-top: 1px solid var(--color-highlight);
}
h2 {
  font-family: "DM Sans";
  padding: 1rem;
  border: 2px solid var(--color-highlight);
  color: var(--color-highlight);
  border-radius: 0.3rem;
}
.projects {
  padding-top: 100px;
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

.above-fold {
  height: 50vh;
  border: 1px solid purple;
  margin-bottom: 20vh;
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
    right: 27%;
    bottom: 45vh;
  }
  .description {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 0;
  }
}
</style>
