<template>
  <div class="hero">
    <h1 class="hero-title">
      ICON
      <br />DELIVERS
      <br />
      <span class="pink">{{currentWord}}</span>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyArr: [
        "VR & AR",
        "ACTIVATIONS",
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
      currentWord: "",
      idx: 0,
      intervalId: ""
    };
  },
  created() {
    console.log("👽");
    this.currentWord = this.copyArr[this.idx];
    const wordUpdate = setInterval(() => {
      if (this.idx === 10) {
        this.idx = 0;
      } else {
        this.idx++;
      }
      this.currentWord = this.copyArr[this.idx];
    }, 2000);
    this.intervalId = wordUpdate;
  },
  destroyed() {
    clearInterval(this.intervalId);
  }
};
</script>

<style>
.hero {
  text-align: left;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 0 0;
  hyphens: auto;
}

.hero-title {
  font-size: 7rem;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem 0;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.pink {
  color: var(--color-highlight);
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
@media (max-width: 900px) {
  .hero-title {
    font-size: 14vw;
  }
}
</style>
