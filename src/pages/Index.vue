<template>
  <section>
    <Hero />
    <button class="start-button" @click="scrollDown">Get Started</button>
    <Layout>
      <div class="container spacer" id="start">
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
.spacer {
  margin-top: 10rem;
}
.start-button {
  position: absolute;
  right: 10vw;
  bottom: 10vh;
  background: var(--color-base);
  color: var(--color-highlight);
  padding: 1rem;
  border: 1px solid var(--color-highlight);
  z-index: 10;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 100;
  border-radius: 0.3rem;
}
.start-button:hover {
  background: var(--color-highlight);
  color: var(--color-contrast);
  transition: all 300ms ease-in-out;
}
@media (max-width: 700px) {
  .start-button {
    right: 27%;
    bottom: 45vh;
  }
}
</style>
