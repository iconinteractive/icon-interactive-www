<template>
  <Layout>
    <div class="container">
      <g-image :src="$page.post.thumbnail" :alt="$page.post.title" class="thumbnail" />
      <div class="two-column">
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
        <div class="project-info">
          <p v-html="$page.post.brief" />
        </div>
      </div>
      <g-image
        v-if="$page.post.horizontal_image_two"
        :src="$page.post.horizontal_image_two"
        :alt="$page.post.title"
      />
      <section class="two-column" v-if="$page.post.vertical_image_one">
        <g-image
          v-if="$page.post.vertical_image_one"
          class="vertical-img"
          :src="$page.post.vertical_image_one"
          :alt="$page.post.title"
        />
        <g-image class="vertical-img" :src="$page.post.vertical_image_two" :alt="$page.post.title" />
      </section>
      <section class="two-column">
        <div class="project-text">
          <span class="label">Process</span>
          <p v-html="$page.post.process" />
        </div>
        <div class="project-text">
          <span class="label">Solution</span>
          <p v-html="$page.post.solution" />
        </div>
      </section>
      <g-image
        v-if="$page.post.horizontal_image_three"
        :src="$page.post.horizontal_image_three"
        :alt="$page.post.title"
      />
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
  margin-top: 6rem;
}
.two-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-template-rows: auto;
}
.vertical-img {
  margin-right: 2.5%;
}
.project-info {
  font-size: 1rem;
  width: 90%;
  margin: 4rem 2rem;
}
.project-info > div {
  margin-right: 4rem;
}

.project-text-container {
  display: flex;
}
.g-image {
  margin: 2rem 0;
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
@media (max-width: 850px) {
  .two-column {
    grid-template-columns: 1fr;
  }
}
</style>
