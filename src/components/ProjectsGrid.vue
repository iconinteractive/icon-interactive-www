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
          <div
            class="category-wrap"
            v-for="(tag, index) in tagFilter(item.node.service_tags)"
            :key="index"
          >
            <a :href="formatUrl(tag)">{{ formatServiceName(tag) }}</a>
          </div>
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
  transition: all 500ms ease;
}
.project-title {
  font-family: "DM Sans", helvetica, sans-serif;
  position: absolute;
  top: 12%;
  left: 0;
  transition: all 500ms ease;
  padding: 0;
  width: 60%;
  opacity: 0;
  z-index: -1;
  color: var(--color-contrast-1);
}

.project-label {
  font-family: "DM Sans", helvetica, sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1rem;
  color: var(--color-contrast-1);
  background: transparent;
  display: flex;
  flex-direction: column;
  transition: all 500ms ease;
}

.category-wrap {
  transition: all 500ms ease;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 8px;
  z-index: 1;
  text-decoration: none;
  width: fit-content;
}

.category-wrap a {
  transition: all 500ms ease;
  text-decoration: none;
}
.category-wrap a:hover {
  transition: all 500ms ease;
  text-decoration: underline;
}

.project-title h3 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
.threeColumn .project-title h3 {
  font-size: 1.5rem;
}
.project:hover .project-title {
  transition: all 500ms ease;
  opacity: 1;
  left: 16px;
}
.project:hover .project-label {
  transition: all 500ms ease;
  bottom: 8px;
  left: 8px;
}

.threeColumn .project:hover .thumbnail {
  transition: all 500ms ease;
  width: 30%;
  margin-left: 70%;
}

.threeColumn .project-title {
  width: 65%;
  top: 10%;
}

.project:hover .thumbnail {
  transition: all 500ms ease;
  width: 37%;
  margin-left: 63%;
}
.project-title:hover {
  transition: all 500ms ease;
  opacity: 1;
}

.project:hover .category-wrap a {
  transition: all 500ms ease;
}
.project .category-wrap a {
  transition: all 500ms ease;
}

.client {
  font-size: 1rem;
  margin: 0;
  color: var(--color-highlight);
}

/* @media (max-width: 1400px) {
  .threeColumn {
    grid-template-columns: repeat(2, 1fr);
  }
} */

@media (max-width: 1200px) {
  .thumbnail {
    opacity: 0.5;
    height: 250px;
  }
  .client {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  .category-wrap {
    background-color: transparent;
  }
  .project-title {
    margin-top: 1%;
    opacity: 1;
    left: 8px;
    z-index: 2;
    width: 80%;
  }
  .threeColumn .project:hover .thumbnail {
    width: 100%;
    margin-left: 0%;
  }
  .threeColumn .project-title {
    width: 65%;
    top: 0%;
  }
  .project-title h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  .project .project-title {
    transition: all 500ms ease;
    opacity: 1;
    left: 16px;
  }
  .project .project-label {
    transition: all 500ms ease;
    bottom: 8px;
    left: 8px;
  }
  .project:hover .thumbnail {
    width: 100%;
    margin-left: 0%;
  }
  .projects {
    grid-template-columns: 1fr;
  }
  .project {
    max-height: 300px;
  }
  .threeColumn {
    grid-template-columns: 1fr;
  }
}
</style>
