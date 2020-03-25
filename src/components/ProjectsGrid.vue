<template>
  <div class="projects" :class="{threeColumn: $route.path === '/projects'}">
    <div class="project" v-for="item in projects" :key="item.node.id">
      <a :href="item.node.path" class="project-link">
        <g-image :src="item.node.thumbnail" :alt="item.node.title" class="thumbnail" />
        <div class="project-title">
          <span class="client">{{item.node.client}}</span>
          <h3>{{ item.node.title }}</h3>
        </div>
        <div class="project-label">
          <a
            v-for="(tag, index) in tagFilter(item.node.service_tags)"
            :key="index"
            :href="formatUrl(tag)"
          >{{ formatServiceName(tag) }}</a>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import formatServiceName from "@/components/utility-funcs/formatServiceName.js";
import formatUrl from "@/components/utility-funcs/formatUrl.js";
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatServiceName,
    formatUrl,
    tagFilter(tags) {
      return Object.values(tags).filter(tag => tag);
    }
  }
};
</script>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 15px;
}
.threeColumn {
  grid-template-columns: repeat(3, 1fr);
}
.project {
  position: relative;
  min-height: 100%;
  width: 100%;
  z-index: 0;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  display: block;
  position: relative;
  right: 0;
  box-sizing: border-box;
  min-height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 1s ease-out;
}
.project-title {
  font-family: "DM Sans", helvetica, sans-serif;
  position: absolute;
  top: 10%;
  left: 0rem;
  font-size: 1.5rem;
  transition: all 1s ease-in-out;
  padding: 0 0.25rem;
  width: 50%;
  opacity: 0;
  z-index: -1;
  color: var(--color-contrast-1);
}
.project-label {
  font-family: "DM Sans", helvetica, sans-serif;
  position: absolute;
  bottom: 5%;
  left: 2%;
  font-size: 1rem;
  transition: all 1s ease-in-out;
  color: var(--color-contrast-1);
}

.project-label > a {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.25rem;
  margin-right: 2rem;
  z-index: 1;
}

.project-title h3 {
  margin-bottom: 1rem;
}
.project:hover .project-title {
  transition: all 1s ease-in-out;
  opacity: 1;
}

.project:hover .thumbnail {
  height: 100%;
  width: 40%;
  margin-left: 60%;
}
.project:hover .thumbnail {
  width: 40%;
  margin-left: 60%;
}
.project-title:hover {
  transition: all 500ms ease-in-out;
  opacity: 1;
}

.client {
  font-size: 1.2rem;
  margin: 0;
  color: var(--color-highlight);
}

.categories {
  font-size: 0.8rem;
  padding: 0.5rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}

@media (max-width: 800px) {
  .thumbnail {
    height: 250px;
  }
  .projects {
    grid-template-columns: 1fr;
  }
  .threeColumn {
    grid-template-columns: 1fr;
  }
}
</style>
