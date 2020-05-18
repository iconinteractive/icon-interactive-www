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
    </div>
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
</style>