<template>
  <Layout>
    <div class="container">
      <g-image :src="$page.post.thumbnail" :alt="$page.post.title" class="thumbnail" />
      <div class="project-header">
        <div class="project-info">
          <span class="label" v-html="$page.post.client">Client</span>
          <h1 class="title" v-html="$page.post.title" />
          <div class="categories-container">
            <div class="categories">
              <ul>
                <li
                  class="category label"
                  v-for="(category, index) in $page.post.categories"
                  :key="index"
                  v-text="category"
                />
              </ul>
            </div>
          </div>
        </div>
        <div class="project-text">
          <p v-html="$page.post.brief" />
        </div>
      </div>
      <g-image :src="$page.post.horizontal_image_two" :alt="$page.post.title" />
      <section class="project-text-container">
        <div class="project-text">
          <span class="label">Process</span>
          <p v-html="$page.post.process" />
        </div>
        <div class="project-text">
          <span class="label">Solution</span>
          <p v-html="$page.post.solution" />
        </div>
      </section>
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
    client
    content
    categories
    brief
    process
    solution
    horizontal_image_two
    vertical_image_one
    vertical_image_two
    horizontal_image_three
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
  padding: 2rem 0 4rem 0;
  display: flex;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.title {
  margin-top: 0;
  font-size: 3rem;
  margin-bottom: 1rem;
}
.thumbnail {
  margin-top: 4rem;
}

.half-column {
  display: flex;
  width: 50%;
}
.project-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1rem;
  width: 50%;
  margin-right: 3rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.project-text-container {
  display: flex;
}
.project-text {
  width: 50%;
  font-size: 1rem;
  margin-right: 2rem;
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
</style>
