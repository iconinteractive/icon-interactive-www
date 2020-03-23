<template>
  <div class="projects" :class="{threeColumn: $route.path === '/projects'}">
    <div class="project" v-for="item in projects" :key="item.node.id">
      <g-link :to="item.node.path" class="project-link">
        <g-image :src="item.node.thumbnail" :alt="item.node.title" class="thumbnail" />
        <div class="project-title">
          <span class="client">{{item.node.client}}</span>
          <h3>{{ item.node.title }}</h3>
        </div>
        <div class="project-label">
          <g-link
            v-for="(tag, index) in item.node.service_tags"
            :key="index"
            :to="formatUrl(tag)"
          >{{ formatServiceName(tag) }}</g-link>
        </div>
      </g-link>
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
    formatUrl
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
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 1s ease;
}
.project-title {
  font-family: "DM Sans", helvetica, sans-serif;
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  font-size: 1.5rem;
  transition: all 1s ease-in-out;
  padding: 0 0.25rem;
  width: 35%;
  opacity: 0;
  /* background-color: rgba(0, 0, 0, 0.75);  */
  background-size: auto;
  color: var(--color-contrast-1);
}
.project-label {
  font-family: "DM Sans", helvetica, sans-serif;
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  font-size: 1rem;
  transition: all 1s ease-in-out;
  padding: 0 0.25rem;
  display: flex;
  justify-content: space-around;
  /* opacity: 0; */
  background-color: rgba(0, 0, 0, 0.5);
  background-size: auto;
  color: var(--color-contrast-1);
}

.project-title h3 {
  margin-bottom: 1rem;
  /* padding: 0.5rem; */
  /* background-color: rgba(0, 0, 0, 0.85); */
}
.thumbnail:hover + .project-title {
  transition: all 1s ease-in-out;
  opacity: 1;
}

.thumbnail:hover {
  transform: translateX(-20px);
  width: 60%;
  margin-left: 40%;
}
.project-title:hover {
  /* transform: translate3d(5px, -5px, 0px); */
  transition: all 1s ease-in-out;
  opacity: 1;
}

.client {
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.75);
  /* border-bottom: 1px solid var(--color-highlight); */
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
