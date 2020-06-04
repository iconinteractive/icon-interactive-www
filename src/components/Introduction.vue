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
  margin: 0 0 30vh;
  color: var(--color-contrast);
  transition: all 300ms ease-in-out;
  /* border: 1px solid cyan; */
}
.introduction {
  margin: 0 0 2rem;
  font-size: 1.1rem;
  line-height: 1.6rem;
  max-width: 700px;
  transition: all 300ms ease-in-out;
}
.project-info {
  margin-left: 6rem;
}
.background {
  position: absolute;
  top: -95px;
  left: 0;
  min-width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
}
.column-img {
  position: absolute;
  top: 20%;
  right: 0;
  width: 45%;
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
  margin: 1rem 0;
}
.category {
  font-size: 1rem;
}
.category:nth-child(2) {
  margin-left: 2rem;
}
.paragraph-block {
  margin-left: 6rem;
  font-size: 1.1rem;
  line-height: 1.6rem;
  border-bottom: 1px solid var(--color-highlight);
}
.title {
  font-size: 2.75rem;
  line-height: 3.25rem;
  margin: 1rem 0 0;
}
.client-logo {
  width: 150px;
  margin-left: 6rem;
}
@media (max-width: 800px) {
  .introduction {
    width: 100%;
    max-width: 800px;
  }
  .intro-container {
    margin: 0 0 5rem;
  }
  .title {
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 1rem 0 0;
  }
  .background,
  .column-img {
    position: static;
    opacity: 1;
    margin: 2rem 0;
    width: 100%;
    object-fit: contain;
  }
  .client-logo {
    display: none;
  }
  .project-info,
  .paragraph-block {
    margin: 0 2rem;
  }
}
@media (min-width: 801px) and (max-width: 1500px) {
  .background {
    /* height: 110vh;
    width: auto; */
    object-fit: cover;
  }
}
@media (min-width: 1500px) {
  .intro-container {
    margin: 0 0 30rem;
  }
}
@media only screen and (min-height: 900px) {
  .intro-container {
    margin: 0 0 50vh;
  }
}
@media (min-width: 2000px) {
  .intro-container {
    margin: 10rem 0 30rem;
  }
}
</style>