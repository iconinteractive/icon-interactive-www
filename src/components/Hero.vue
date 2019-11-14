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
        "INTERNET",
        "SOFTWARE",
        "HARDWARE",
        "SERVERS",
        "STRATEGY",
        "INSIGHT",
        "PIZZA",
        "PIZZAZZ",
        "DESIGN",
        "FINESSE",
        "TACT"
      ]
    };
  },
  created() {
    console.log("👽 Built with gridsome & forestry");
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
  padding-left: 125px;
  hyphens: auto;
  width: calc(100vw + 15px);
  height: 100%;
  text-align: left;
  margin-bottom: 8vh;
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
  line-height: 6.75rem;
}
.pink {
  color: var(--color-highlight);
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
@media (max-width: 900px) {
  .hero {
    padding: 10vh 5vw;
    height: 65vh;
  }
  .hero-title {
    font-size: 12vw;
  }
}
</style>
