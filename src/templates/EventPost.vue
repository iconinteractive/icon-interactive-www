<template>
  <Layout>
    <div class="container">
      <h1 v-html="$page.post.title" class="title-sticky" />
      <div class="journal-meta">
        <div class="journal-date">
          <span class="label">Date</span>
          <div v-text="$page.post.date" />
        </div>
      </div>
      <EventContent :content="$page.post.content" />
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
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
