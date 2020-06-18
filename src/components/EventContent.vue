<template>
  <section class="text-wrap-news margin">
    <div class="text-block-news" v-html="content" />
  </section>
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>

<style>
.text-block-news a {
  color: #000;
  text-decoration: underline;
}

h2,
h3 {
  font-size: 1.5rem;
}
h4,
h5,
h6 {
  font-size: 1.15rem;
}
.text-wrap-news {
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
  color: var(--color-contrast);
}
.text-block-news {
  width: 90%;
  font-size: 1.1rem;
  line-height: 1.6rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
}
.text-block-news img {
  display: block;
  margin: 0 auto;
}
.text-block-news h1,
.text-block-news h2,
.text-block-news h3,
.text-block-news h4,
.text-block-news h5,
.text-block-news h6 {
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: var(--color-highlight);
  margin: 1rem 0;
}
.text-block-news p {
  margin: 0 0 1rem;
}
ol {
  margin: 0 0 2rem;
  padding-left: 20px;
}
ul {
  padding-left: 20px;
  margin: 0 0 2rem;
}
.margin {
  margin-left: 6rem;
  margin-right: 6rem;
}
.contact-wrap {
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(53, 53, 53, 0.7);
  padding: 4rem 0 2rem;
  background-color: #000;
  width: 100%;
  position: relative;
  left: -6rem;
}
.contact-wrapper > section:first-of-type {
  max-width: 800px;
}
@media (max-width: 800px) {
  .text-block-news {
    width: 100%;
  }
  .margin {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .contact-wrap {
    left: -2rem;
  }
}
</style>
