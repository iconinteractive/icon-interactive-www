<template>
  <Layout>
    <div class="container">
      <h1 class="title">
        LATEST &
        <span class="pink">GREATEST</span>
      </h1>
      <g-link
        :to="item.node.path"
        v-for="item in $page.posts.edges"
        :key="item.node.id"
        class="event-post"
      >
        <div class="container event">
          <label class="pink">{{item.node.date}}</label>
          <h2 class="event-title">{{ item.node.title }}</h2>
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
        date (format: "MM-YYYY")
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
  max-width: 100%;
  margin-left: 0;
}
.event-header {
  font-size: 2rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.event-post {
  display: block;
  padding: 1rem 0;
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
  transform: translateX(3rem);
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
.pink {
  display: block;
  color: var(--color-highlight);
}

@media (min-width: 560px) {
  .event-post {
    padding: 1rem 0;
  }
}

@media (min-width: 860px) {
  .event-post {
    padding: 3rem 0;
  }
}
</style>
