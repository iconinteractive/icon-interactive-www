<template>
  <Layout>
    <div :style="style">
      <h1 v-html="$page.post.title" class="news-title" />
      <EventContent
        :style="style"
        class="event-content"
        :content="$page.post.content"
      />
    </div>
  </Layout>
</template>

<page-query>
query NewsPost ($path: String!) {
  post: newsPost (path: $path) {
    title
    date (format: "YYYY")
    content
  }
}
</page-query>

<script>
import EventContent from "@/components/EventContent"

export default {
  components: {
    EventContent,
  },
  computed: {
    style() {
      return {
        backgroundColor: `#f7f7f7`,
        color: "#000",
      }
    },
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: underline;
  color: var(--color-highlight);
}
.news-title {
  text-align: center;
  font-size: 4rem;
  width: 80%;
  margin: 0 auto;
}
@media (max-width: 800px) {
  .title {
    line-height: 3rem;
  }
}
</style>
