<template>
  <div class="hero">
    <h1 class="hero-title" :class="{'digi-prod': digiProd, 'mobile-apps': mobileApps }">
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
          @erased="onErased"
        ></VueTyper>
      </ClientOnly>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    copyArr: Array
  },
  components: {
    VueTyper: () =>
      import("vue-typer")
        .then(m => m.VueTyper)
        .catch()
  },
  data() {
    return {
      digiProd: false,
      mobileApps: false
    };
  },
  created() {
    console.log(
      "%c 👽 Built on gridsome & forestry. Check out our open roles on the About page",
      "background: #000; color: #e51365; font-size:30px;"
    );
  },
  methods: {
    onErased(string) {
      console.log(string, this.digiProd, this.mobileApps);

      if (string === this.copyArr[0]) {
        this.digiProd = !this.digiProd;
      }
      if (string === this.copyArr[1]) {
        this.digiProd = !this.digiProd;
        this.mobileApps = !this.mobileApps;
      }
      if (string === this.copyArr[2]) {
        this.mobileApps = !this.mobileApps;
      }
    }
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
  padding-left: 125px;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  height: 100%;
  /* height: 45vmin; */
  width: 80%;
  text-align: left;
  margin-bottom: 0;
}
.hero-title {
  font-size: 15vmin;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem 0;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  line-height: 15vmin;
  border: 1px solid cyan;
  width: 102%;
  /* transform: all 200ms ease-out; */
}
.hero-title.digi-prod {
  width: 101%;
}
.hero-title.mobile-apps {
  width: 92%;
}
.pink {
  color: var(--color-highlight);
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
@media (max-width: 800px) {
  .hero {
    padding-left: 0;
    margin: 2rem 0;
    width: 100%;
  }
  .hero-title {
    font-size: 11vmin;
    line-height: 11vmin;
  }
  .hero-title.digi-prod {
    width: 78%;
  }
  .hero-title.mobile-apps {
    width: 70%;
  }
}
@media (max-width: 500px) {
  .hero {
    padding-left: 0;
    margin: 2rem 0;
    width: 100%;
  }
  .hero-title {
    font-size: 11vmin;
    line-height: 11vmin;
  }
  .hero-title.digi-prod {
    width: 90%;
  }
  .hero-title.mobile-apps {
    width: 80%;
  }
}
</style>
