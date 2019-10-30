<template>
  <Layout>
    <div class="container">
      <g-image :src="$page.post.thumbnail" :alt="$page.post.title" class="thumbnail" />
      <h1 class="title-sticky" v-html="$page.post.title" />
      <div class="project-header">
        <div class="project-info">
          <div class="categories-container">
            <div class="categories">
              <span class="label">Services</span>
              <ul>
                <li
                  class="category"
                  v-for="(category, index) in $page.post.categories"
                  :key="index"
                  v-text="category"
                />
              </ul>
            </div>
          </div>
          <div class="year-container">
            <span class="label">Year</span>
            <div v-html="$page.post.date" />
          </div>
        </div>
      </div>
      <div v-html="$page.post.content" class="content" />
    </div>
  </Layout>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    date (format: "YYYY")
    thumbnail
    content
    categories
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style scoped>
.project-header {
  padding: 0vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.thumbnail {
  margin-top: 4rem;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:before {
  content: "- ";
}
.label {
  color: var(--color-highlight);
}
ul {
  margin: 0;
}
/* .content {
  border: 3px solid salmon;
} */
</style>
