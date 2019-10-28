<template>
  <div class="hero">
    <h1 class="hero-title">ICON DELIVERS</h1>
    <h1>{{currentWord}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyArr: [
        "VR / AR",
        "INTERFACES",
        "INTERNET",
        "EXPERIENCES",
        "SOFTWARE",
        "HARDWARE",
        "SERVERS",
        "SERVICES",
        "PIZZA",
        "PIZZAZZ",
        "DESIGN"
      ],
      currentWord: "test"
    };
  }
};
</script>

<style>
.hero {
  text-align: left;
  /* width: 90vw; */
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem 0;
}

.hero-title {
  font-size: 7rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
  margin: 0;
  padding: 0;
}
.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  padding: 0;
  margin: 0;
  opacity: 0.6;
}
</style>
