<template>
  <section>
    <Layout>
      <div class="container">
        <Hero />
        <div class="description">
          <p>ICON is a full-service digital agency that represents the merger of extraordinary design and powerful technology.</p>
          <p>We've been been providing unique experiences & creative solutions to clients around the globe for over two decades.</p>
          <!-- <button class="start-button" @click="scrollDown">Get Started</button> -->
        </div>

        <h1>Recently we've...</h1>
        <ProjectsGrid :projects="$page.projects.edges" />
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
        categories
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
.description {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8vw;
  font-size: 1.5rem;
  padding: 0 125px;
  width: 100%;
}

.start-button {
  background: var(--color-base);
  color: var(--color-highlight);
  padding: 1rem;
  border: 1px solid var(--color-highlight);
  z-index: 10;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 100;
  border-radius: 0.3rem;
  width: 400px;
  height: 60px;
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
