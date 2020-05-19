<template>
  <section class="intro-container">
    <div class="introduction">
      <div class="project-info">
        <span class="highlight" v-html="client">{{ client }}</span>
        <h1 class="title" v-html="intro.page_title" />
        <div class="categories">
          <ul>
            <li class="category highlight" v-for="(tag, index) in intro.service_tags" :key="index">
              <g-link class="tag" :to="formatUrl(tag)">{{ formatServiceName(tag) }}</g-link>
            </li>
          </ul>
        </div>
        <a
          class="highlight"
          v-if="intro.project_url"
          :href="intro.project_url"
          target="_blank"
          rel="noopener noreferrer"
        >{{ intro.project_url }}</a>
      </div>
      <div class="paragraph-block" v-html="intro.intro_paragraph" />
    </div>
    <img v-if="intro.client_logo" class="logo" :src="intro.client_logo" alt="client logo" />
    <img v-if="intro.background_hero_image" :src="intro.background_hero_image" class="background" />
  </section>
</template>

<script>
import formatServiceName from "./utility-funcs/formatServiceName.js";
import formatUrl from "./utility-funcs/formatUrl.js";

export default {
  props: ["intro"],
  methods: {
    formatServiceName,
    formatUrl
  },
  computed: {
    client() {
      return this.intro.client.toUpperCase();
    }
  }
};
</script>

<style>
.intro-container {
  height: 60vh;
}
.introduction {
  margin: 0 0 2rem;
  width: 55%;
  border-bottom: 1px solid var(--color-highlight);
}
.background {
  position: absolute;
  top: -95px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -2;
  opacity: 0.4;
}
.highlight {
  color: var(--color-highlight);
}
.category.highlight a {
  color: var(--color-highlight);
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
}
.category:nth-child(2) {
  margin-left: 2rem;
}
.paragraph-block {
  margin: 2rem 0;
}
.title {
  font-size: 2.75rem;
  line-height: 3rem;
  margin: 1rem 0 0;
}
.logo {
  width: 150px;
}
</style>