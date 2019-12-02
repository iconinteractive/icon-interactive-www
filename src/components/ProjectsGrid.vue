<template>
  <div class="projects" :class="{threeColumn: $route.path === '/projects'}">
    <div class="project" v-for="item in projects" :key="item.node.id">
      <g-link :to="item.node.path" class="project-link">
        <g-image :src="item.node.thumbnail" :alt="item.node.title" class="thumbnail" />
        <h3 class="project-title">{{ item.node.title }}</h3>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
}
.threeColumn {
  grid-template-columns: repeat(3, 1fr);
}
.project {
  position: relative;
  text-align: center;
  z-index: 0;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.project-title {
  font-family: "DM Sans", helvetica, sans-serif;
  position: absolute;
  bottom: 0.3rem;
  left: 1rem;
  font-size: 1.5rem;
  color: var(--color-contrast-1);
  transition: all 1s ease-in-out;
  padding: 0 0.5rem;
  opacity: 0;
}
.thumbnail:hover + h3 {
  transition: all 1s ease-in-out;
  background-color: var(--color-highlight);
  color: var(--color-contrast-1);
  opacity: 1;
}
h3:hover {
  background-color: var(--color-highlight);
  color: var(--color-contrast-1);
  transition: all 1200ms ease-in-out;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}

@media (max-width: 700px) {
  .thumbnail {
    height: 250px;
  }
  .threeColumn {
    grid-template-columns: 1fr;
  }
}
</style>
