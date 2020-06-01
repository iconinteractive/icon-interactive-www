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
      <img
        v-if="intro.background_hero_image"
        :src="intro.background_hero_image"
        :class="{'background': intro.hero_image_toggle, 'column-img': !intro.hero_image_toggle}"
      />
      <div class="paragraph-block" v-html="intro.intro_paragraph" />
    </div>
    <img v-if="intro.client_logo" class="client-logo" :src="intro.client_logo" alt="client logo" />
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
  margin: 0 0 10rem;
  color: var(--color-contrast);
}
.introduction {
  margin: 0 0 2rem;
  width: 55%;
  border-bottom: 1px solid var(--color-highlight);
  font-size: 1.1rem;
  line-height: 1.6rem;
  max-width: 700px;
}
.background {
  position: absolute;
  top: -95px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -2;
  opacity: 0.4;
  height: 100vh;
  object-fit: contain;
}
.column-img {
  position: absolute;
  top: 20%;
  right: 0;
  width: 50%;
  height: auto;
  z-index: -2;
  object-fit: contain;
}
.highlight {
  color: var(--color-highlight);
}
.category.highlight a {
  color: var(--color-highlight);
}
.categories ul {
  list-style: none;
  padding: 0;
  display: flex;
}
.category {
  font-size: 1rem;
}
.category:nth-child(2) {
  margin-left: 2rem;
}
.paragraph-block {
  margin: 2rem 0;
  font-size: 1.1rem;
  line-height: 1.6rem;
}
.title {
  font-size: 2.75rem;
  line-height: 3.25rem;
  margin: 1rem 0 0;
}
.client-logo {
  width: 150px;
}
@media (max-width: 800px) {
  .introduction {
    width: 90%;
  }
  .background {
    position: static;
    opacity: 1;
    margin: 2rem 0;
  }
  .client-logo {
    display: none;
  }
}
@media (min-width: 1500px) {
  .intro-container {
    margin: 0 0 30rem;
  }
}
@media (min-width: 2000px) {
  .intro-container {
    margin: 10rem 0 30rem;
  }
}
</style>