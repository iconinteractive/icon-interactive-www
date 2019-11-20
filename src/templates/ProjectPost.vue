<template>
  <Layout>
    <div>
      <div class="container">
        <div class="two-column">
          <div class="project-info">
            <span class="label" v-html="$page.post.client">Client</span>
            <h1 class="title" v-html="$page.post.title" />
            <div class="categories-container">
              <div class="categories">
                <ul>
                  <li
                    class="category label"
                    v-for="(tag, index) in $page.post.service_tags"
                    :key="index"
                    v-text="formatServiceName(tag)"
                  />
                </ul>
              </div>
            </div>
            <div class="url" v-if="$page.post.project_url" v-html="$page.post.project_url" />
          </div>
          <div class="project-text">
            <h2 class="label" v-html="$page.post.brief_label" />
            <div v-html="$page.post.brief" />
          </div>
        </div>
        <g-image :src="$page.post.thumbnail" :alt="$page.post.title" class="thumbnail" />
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
          <g-image
            class="vertical-img"
            :src="$page.post.vertical_image_two"
            :alt="$page.post.title"
          />
        </section>
        <blockquote v-if="$page.post.pull_quote" v-html="$page.post.pull_quote" />
        <section class="two-column">
          <div class="project-text">
            <h2 class="label" v-html="$page.post.solution_label" />
            <div v-html="$page.post.solution" />
          </div>
          <div class="project-text">
            <h2 class="label" v-if="$page.post.results">Results & ROI</h2>
            <div class="roi" v-html="$page.post.results" v-if="$page.post.results" />
          </div>
        </section>
        <g-image
          v-if="$page.post.horizontal_image_three"
          :src="$page.post.horizontal_image_three"
          :alt="$page.post.title"
        />
        <div v-html="$page.post.content" class="content" />
      </div>
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
    project_url
    service_tags {
     service_tag_one
     service_tag_two
     service_tag_three
    }
    introduction
    content
    brief_label
    brief
    process
    solution_label
    solution
    pull_quote
    pull_quote_2
    results {
      column_one
      column_two
      column_three
    }
    horizontal_image_two
    two_column_vertical_images {
      vertical_image_one
      vertical_image_two
    }
    two_column_horizontal_images {
      image_one
      image_two
    }
    horizontal_image_three
  }
}
</page-query>

<script>
import formatServiceName from "@/components/utility-funcs/formatServiceName.js";
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  methods: {
    formatServiceName: formatServiceName
  }
};
</script>

<style scoped>
.project-header {
  padding: 2rem 0 4rem 0;
  display: flex;
}
.categories ul {
  list-style: none;
  padding: 0;
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
.url {
  font-size: 1.2rem;
}
.roi {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid var(--color-highlight);
  border-left: 1px solid var(--color-highlight);
}

.roi h1 .project-info {
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
.project-text {
  font-size: 1.2rem;
}
.g-image {
  margin: 2rem 0;
  width: 100%;
}
.label {
  color: var(--color-highlight);
}

blockquote {
  font-size: 2rem;
  color: var(--color-contrast);
  padding-left: 1rem;
  border-left: 1px solid var(--color-highlight);
}

blockquote p {
  font-size: 2rem;
  color: var(--color-highlight);
  border-bottom: 1px solid #fff;
}
.content {
  display: flex;
  margin: 0 auto;
}

@media (max-width: 850px) {
  .two-column {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .project-info {
    font-size: 1rem;
    width: 90%;
    margin: 0;
  }
  .g-image {
    margin: 0.5rem 0;
  }
  .thumbnail {
    margin: 2rem 0;
  }
}
</style>
