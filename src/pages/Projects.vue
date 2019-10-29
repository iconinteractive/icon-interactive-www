<template>
  <Layout>
    <div class="container">
      <div class="page-header">
        <h1 class="title">Work</h1>
      </div>
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
  </Layout>
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
import ProjectsGrid from "@/components/ProjectsGrid";

export default {
  components: {
    ProjectsGrid
  }
};
</script>

<style scoped>
.page-header {
  padding: 2rem 0 4rem 0;
}
.title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
</style>
