<template>
  <Layout>
    <div class="container">
      <h1 class="title">
        ICON
        <br />
        <span class="pink">{{titles.work_page_project_grid_title}}</span>
      </h1>
      <ProjectsGrid :projects="$page.projects.edges" />
      <LogoGridProjects />
      <div class="see-more-container">
        <a class="see-more" href="/clients/">
          <h3>See More</h3>
        </a>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost (filter: {display_on_site: {eq: true}}) {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        client
        thumbnail
        path
        display_on_site
        service_tags {
          service_tag_one
          service_tag_two
          service_tag_three
        }
      }
    }
  }
}

</page-query>

<script>
import ProjectsGrid from "@/components/ProjectsGrid";
import LogoGridProjects from "@/components/LogoGridProjects";

export default {
  components: {
    ProjectsGrid,
    LogoGridProjects
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
  color: #fff;
}
.see-more:hover {
  text-decoration: underline;
  color: var(--color-highlight);
}
</style>




