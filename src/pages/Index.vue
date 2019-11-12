<template>
  <section>
    <Hero />
    <span class="button" @click="scrollDown">Get Started</span>
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
      const top = document.querySelector("#start");
      top.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.spacer {
  margin-top: 10rem;
}
.button {
  position: absolute;
  right: 10vw;
  bottom: 7vh;
  background: var(--color-base);
  color: var(--color-highlight);
  padding: 1rem;
  border: 1px solid var(--color-highlight);
}
</style>
