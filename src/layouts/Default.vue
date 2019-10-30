<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Archivo+Black|DM+Sans&display=swap");

* {
  box-sizing: border-box;
}

body {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
  --color-highlight: #e51365;
  font-family: "DM Sans", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

h1 {
  font-family: "Archivo Black", "DM Sans", sans-serif;
  font-size: 4rem;
  margin: 0 0 2rem 0;
  padding-top: 1rem;
}

.layout {
  padding: 4rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

a:hover {
  color: var(--color-highlight);
}

img {
  max-width: 100%;
}

.text-container {
  width: 70%;
  font-size: 1.1rem;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>
