<template>
  <Layout>
    <div class="container">
      <h1 class="title">
        ICON
        <br />
        <span class="pink">{{titles.work_page_project_grid_title}}</span>
      </h1>
      <ProjectsGrid :projects="$page.projects.edges" />
      <div class="fill" />
      <LogoGrid />
      <div class="see-more-container">
        <a class="see-more" href="/clients">
          <h3>See More</h3>
        </a>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allBlocksPage (filter: {intro:{ display_on_site: {eq: true}} }) {
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

<style scoped>
.see-more-container {
  display: flex;
  justify-content: center;
  padding: 68px 0 100px;
}
.see-more {
  font-weight: normal;
  color: var(--color-contrast);
}
.see-more:hover {
  text-decoration: underline;
  color: var(--color-highlight);
}
.fill {
  height: 6rem;
  width: 100%;
}
</style>




