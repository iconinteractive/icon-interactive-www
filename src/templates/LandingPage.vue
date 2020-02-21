<template>
  <Layout>
    <div class="container">
      <h1 v-html="$page.post.title" class="title" />
      <EventContent class="event-content" :content="$page.post.content" />
    </div>
  </Layout>
</template>

// <page-query>
// query NewsPost ($path: String!) {
//   post: newsPost (path: $path) {
//     title
//     date (format: "YYYY")
//     content
//   }
// }
// </page-query>

<script>
import EventContent from "@/components/EventContent";

export default {
  components: {
    EventContent
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: underline;
  color: var(--color-highlight);
}
.event-content {
  width: 75%;
}
.event-header {
  padding: 2rem 0 4rem 0;
}
.title {
  margin: 0 0 4rem 0;
  padding: 0;
  line-height: 5.25rem;
}
.event-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
}
.event-meta > div {
  margin-right: 4rem;
}
.event-meta > div:last-of-type {
  margin: 0;
}
.label {
  color: var(--color-highlight);
}
@media (max-width: 800px) {
  .event-content {
    width: 95%;
  }
  .title {
    line-height: 3rem;
  }
}
</style>
