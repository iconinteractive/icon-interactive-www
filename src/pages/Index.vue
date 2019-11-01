<template>
  <section>
    <div class="container">
      <Hero />
    </div>
    <Layout>
      <div class="container spacer">
        <ProjectsGrid :projects="$page.projects.edges" />
      </div>
    </Layout>
  </section>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail
        path
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
  }
};
</script>

<style scoped>
.spacer {
  margin-top: 10rem;
}
</style>
