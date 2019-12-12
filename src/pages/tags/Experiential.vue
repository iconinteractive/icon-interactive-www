<template>
  <Layout>
    <div class="container">
      <h1 class="title">Experiential</h1>
      <ProjectsGrid :projects="this.queryResults" />
    </div>
  </Layout>
</template>

<page-query>
query TagPosts {
	projects: allProjectPost (filter: {display_on_site: {eq: true}}) {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        client
        thumbnail
        path
        service_tags { 
          service_tag_one,
          service_tag_two,
          service_tag_three
        }
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
  },
  created() {
    this.queryResults = this.$page.projects.edges;
    this.queryResults = this.queryResults.filter(({ node }) => {
      for (const tag in node.service_tags) {
        if (node.service_tags[tag] === "experiential") {
          return true;
          break;
        }
      }
    });
  },
  data() {
    return {
      queryResults: []
    };
  }
};
</script>
