<template>
  <Layout>
    <div class="container">
      <h1 class="title">{{titles.work_page_project_grid_title}}</h1>
      <ProjectsGrid :projects="$page.projects.edges" />
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
  },
  data() {
    return {
      titles: require("../../data/titles.json")
    };
  }
};
</script>


