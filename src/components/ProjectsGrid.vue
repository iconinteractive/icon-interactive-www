<template>
  <div class="projects">
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.project {
  position: relative;
  grid-column: auto / span 2;
  text-align: center;
  z-index: 0;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 560px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.project-title {
  font-family: "DM Sans", helvetica, sans-serif;
  position: absolute;
  bottom: 0.3rem;
  left: 2.5rem;
  font-size: 2rem;
  color: var(--color-contrast-1);
  transition: all 800ms ease-in-out;
}
.thumbnail:hover + h3 {
  transition: all 800ms ease-in-out;
  color: var(--color-highlight);
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
}
</style>
