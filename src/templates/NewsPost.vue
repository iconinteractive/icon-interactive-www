<template>
  <Layout>
    <section>
      <div :style="style">
        <div class="news-title-wrap">
          <h1 v-html="$page.post.title" class="news-title margin" />
        </div>
        <EventContent
          :style="style"
          class="event-content"
          :content="$page.post.content"
        />
      </div>
      <section class="contact-wrap margin">
        <ContactForm />
      </section>
    </section>
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
import ContactForm from "@/components/ContactForm"

export default {
  components: {
    EventContent,
    ContactForm,
  },
  computed: {
    style() {
      return {
        backgroundColor: `#ebebeb`,
        color: "#000",
        paddingBottom: "3rem",
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
  text-align: left;
  font-size: 3.5rem;
  max-width: 800px;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
}
.nav a {
  border: 1px solid cyan;
}
.margin {
  margin-left: 6rem;
  margin-right: 6rem;
}
.news-title-wrap {
  display: flex;
  justify-content: center;
}
@media (max-width: 800px) {
  .news-title {
    line-height: 2.5rem;
    font-size: 2.25rem;
  }
  .margin {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
