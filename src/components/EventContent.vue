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
h2 {
  font-size: 2rem;
}
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
  width: 70%;
  font-size: 1.1rem;
  line-height: 1.6rem;
  max-width: 700px;
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
  margin: 0;
}
.text-block-news p {
  margin: 0.5rem 0 2rem;
}
ul {
  padding-left: 20px;
  margin: 0;
}
.margin {
  margin-left: 6rem;
  margin-right: 6rem;
}
@media (max-width: 800px) {
  .text-block-news {
    width: 100%;
  }
  .margin {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
