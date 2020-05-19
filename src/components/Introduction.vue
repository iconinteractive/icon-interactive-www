<template>
  <section>
    <div class="two-column introduction">
      <div class="project-info">
        <span class="label" v-html="intro.client" />
        <h1 class="title" v-html="intro.page_title" />
        <div class="categories-container">
          <div class="categories">
            <ul>
              <li class="category label" v-for="(tag, index) in intro.service_tags" :key="index">
                <g-link class="tag" :to="formatUrl(tag)">{{ formatServiceName(tag) }}</g-link>
              </li>
            </ul>
          </div>
        </div>
        <a
          class="url"
          v-if="intro.project_url"
          :href="intro.project_url"
          target="_blank"
          rel="noopener noreferrer"
        >{{ intro.project_url }}</a>
      </div>
      <div v-html="intro.intro_paragraph" />
      <img :src="intro.client_logo" />
    </div>
    <img
      src="https://s3.amazonaws.com/forestry.iconinteractive.com/genesis-header-v2@2x.jpg"
      class="background"
    />
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
  }
};
</script>

<style scoped>
.introduction {
  border: 1px solid cyan;
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
</style>