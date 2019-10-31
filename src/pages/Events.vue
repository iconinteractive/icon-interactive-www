<template>
  <Layout>
    <div class="container">
      <h1 class="title-sticky">Events</h1>
      <g-link
        :to="item.node.path"
        v-for="item in $page.posts.edges"
        :key="item.node.id"
        class="event-post"
      >
        <div class="container event">
          <h2 class="event-title">{{ item.node.title }}</h2>
          <p class="event-excerpt">{{ item.node.excerpt }}</p>
        </div>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query Event {
	posts: allEventPost {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style scoped>
.container.event {
  max-width: 720px;
}
.event-header {
  font-size: 2rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.event-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.event-post > * {
  transition: transform 0.5s ease;
}
.event-post:hover {
  border: 1px solid var(--color-highlight);
}
.event-post:hover > * {
  transform: translateX(4rem);
}
.event-post h1,
.event-post h2 {
  margin: 0;
  padding: 0;
}
.event-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.event-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .event-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .event-post {
    padding: 5rem 0;
  }
}
</style>
