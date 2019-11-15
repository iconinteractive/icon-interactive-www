<template>
  <Layout>
    <div class="container">
      <h1 class="title">Work</h1>
      <ProjectsGrid :projects="$page.projects.edges" />
      <h1 class="title">Clients</h1>
      <LogoGrid />
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
import LogoGrid from "@/components/LogoGrid";

export default {
  components: {
    ProjectsGrid,
    LogoGrid
  }
};
</script>


