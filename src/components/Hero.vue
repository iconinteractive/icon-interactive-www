<template>
  <div class="hero">
    <h1 class="hero-title">
      ICON
      <br />DELIVERS
      <br />
      {{currentWord}}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyArr: [
        "VR & AR",
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
</style>
