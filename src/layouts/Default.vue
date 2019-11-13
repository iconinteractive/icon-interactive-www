<template>
  <div class="layout">
    <Header />
    <transition name="fade" appear>
      <slot />
    </transition>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-base-opacity: rgb(0, 0, 0, 0.9);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
  --color-highlight: #e51365;
  font-family: "DM Sans", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}
::selection {
  background: rgba(229, 19, 101, 1);
}
::-moz-selection {
  background: rgba(229, 19, 101, 1);
}

h1 {
  font-family: "Archivo Black", "DM Sans", sans-serif;
  font-size: 5rem;
  margin: 0 0 2rem 0;
  padding-top: 1rem;
}
h3 {
  font-family: "Archivo Black", "DM Sans", sans-serif;
  font-size: 1.5rem;
  margin: 1rem 0 2rem 0;
}

.title-sticky {
  margin: 4rem 0 4rem 0;
  padding: 0;
  position: sticky;
  position: -webkit-sticky;
  top: 1rem;
  z-index: 10;
}

.title {
  margin: 4rem 0 4rem 0;
  padding: 0;
  z-index: 10;
}

.layout {
  padding: 2rem 0 0 0;
}

.container {
  max-width: 90vw;
  padding: 0 5vw;
}
ul {
  list-style: none;
  padding: 0;
}
.fade-enter-active {
  transition: opacity 0.75s;
}

.fade-enter {
  opacity: 0;
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
  font-size: 1rem;
}

.label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
h2 {
  font-family: "Archivo Black", "DM Sans", sans-serif;
  font-size: 2rem;
}
@media (max-width: 620px) {
  h1 {
    font-size: 2rem;
  }
  .title {
    margin-bottom: 1rem;
  }
}
</style>
