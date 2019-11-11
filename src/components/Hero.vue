<template>
  <div class="hero">
    <h1 class="hero-title">
      ICON
      <br />DELIVERS
      <br />
      <ClientOnly>
        <VueTyper
          :text="copyArr"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="75"
          :pre-erase-delay="2000"
          :erase-delay="480"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="blink"
        ></VueTyper>
      </ClientOnly>
    </h1>
  </div>
</template>

<script>
export default {
  components: {
    VueTyper: () =>
      import("vue-typer")
        .then(m => m.VueTyper)
        .catch()
  },
  data() {
    return {
      copyArr: [
        "VR & AR",
        "ACTIVATIONS",
        "INTERFACES",
        "INTERNET",
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
    console.log("👽 Built on gridsome & forestry");
    // this.currentWord = this.copyArr[this.idx];
    // const wordUpdate = setInterval(() => {
    //   if (this.idx === 10) {
    //     this.idx = 0;
    //   } else {
    //     this.idx++;
    //   }
    //   this.currentWord = this.copyArr[this.idx];
    // }, 2000);
    // this.intervalId = wordUpdate;
  },
  destroyed() {
    // clearInterval(this.intervalId);
  }
};
</script>

<style>
.vue-typer .custom.char.typed {
  color: #e51365;
}
.vue-typer .custom.caret {
  background-color: #e51365;
}
.vue-typer .custom.char.selected {
  background-color: #e51365;
  color: #fff;
}
.hero {
  text-align: left;
  max-width: 100%;
  margin: 0 auto;
  padding: 10vh 15vw;
  hyphens: auto;
  width: calc(100vw + 15px);
  height: 70vh;
  text-align: left;
}

.hero-title {
  font-size: 7rem;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem 0;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.pink {
  color: var(--color-highlight);
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
@media (max-width: 900px) {
  .hero {
    padding: 5vh 5vw;
    height: 65vh;
  }
  .hero-title {
    font-size: 12vw;
  }
}
</style>
