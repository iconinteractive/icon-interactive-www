<template>
  <Layout>
    <div class="container">
      <h1 v-html="$page.post.title" class="title" />
      <div class="event-meta">
        <div class="event-date">
          <div class="pink" v-text="$page.post.date" />
        </div>
      </div>
      <EventContent class="event-content" :content="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query EventPost ($path: String!) {
  post: eventPost (path: $path) {
    title
    date (format: "MMMM D YYYY")
    content
  }
}
</page-query>

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
.event-content {
  width: 60%;
}
.event-header {
  padding: 2rem 0 4rem 0;
}
.event-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
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
}
</style>
