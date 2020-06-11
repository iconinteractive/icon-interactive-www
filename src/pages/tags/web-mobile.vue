<template>
  <Layout>
    <div class="container">
      <h1 class="title">Web & Mobile</h1>
      <ProjectsGrid :projects="this.queryResults" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allBlocksPage (filter: { intro:{ display_on_site: {eq: true}} }) {
    edges {
      node {
        path
        intro {
          display_on_site
          date
      		service_tags { service_tag_one, service_tag_two }
      		page_title
      		client
          thumbnail
      		project_url
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
      for (const tag in node.intro.service_tags) {
        if (node.intro.service_tags[tag] === "web and mobile") {
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
