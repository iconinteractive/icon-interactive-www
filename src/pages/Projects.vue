<template>
  <Layout>
    <div class="container">
      <h1 class="title">Work</h1>
      <ProjectsGrid :projects="$page.projects.edges" />
      <h1 class="title">Clients</h1>
      <section class="grid">
        <div>
          <g-image src="~/assets/logos/audi.jpg" alt="audi logo" />
        </div>
        <g-image src="~/assets/logos/bmw.svg" alt="bmw logo" />
        <g-image src="~/assets/logos/bonnaroo.png" alt="bonnaroo logo" />
        <g-image src="~/assets/logos/jlo.svg" alt="jlo logo" />
        <g-image src="~/assets/logos/katy.png" alt="katy logo" />
        <g-image src="~/assets/logos/nissan.svg" alt="nissan logo" />
        <g-image src="~/assets/logos/panasonic.jpg" alt="panasonic logo" />
        <g-image src="~/assets/logos/phish.jpg" alt="phish logo" />
        <g-image src="~/assets/logos/siriusxm.jpg" alt="siriusxm logo" />
      </section>
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
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
