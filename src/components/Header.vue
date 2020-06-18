<template>
  <header class="header">
    <div class="container">
      <g-link :to="{ name: 'home' }" class="home-link">
        <img
          src="../../static/icon-logo.svg"
          :alt="settings.site_name"
          class="logo"
        />
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/projects">Work</g-link>
        <g-link class="nav__link" to="/capabilities">Capabilities</g-link>
        <g-link class="nav__link" to="/news">News</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/connect">Connect</g-link>
      </nav>
      <transition name="slide">
        <MobileMenu v-if="menuOn" :close="menuToggle" />
      </transition>
      <section
        class="mobile-burger"
        :class="{ 'mobile-x': menuOn }"
        @click="menuToggle"
      >
        <hr />
        <hr />
      </section>
    </div>
  </header>
</template>

<script>
import MobileMenu from "./MobileMenu"

export default {
  components: {
    MobileMenu,
  },
  data() {
    return {
      logo: require("../../static/icon-logo.svg"),
      settings: require("../../data/theme.json"),
      menuOn: false,
    }
  },
  methods: {
    menuToggle() {
      this.menuOn = !this.menuOn
    },
  },
}
</script>

<style scoped>
.header {
  top: 0;
  padding: 2rem 0;
  z-index: 10;
  width: 100%;
  /* margin-bottom: 2rem; */
  background-color: transparent;
}
.nav {
  display: flex;
  justify-content: center;
  transition: all 1s ease-in-out;
}
.intro {
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  transition: all 1s ease-in-out;
  margin-right: 40%;
}
.intro p {
  font-size: 1.2rem;
}
.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.home-link {
  text-decoration: none;
}
.logo {
  height: 45px;
  width: auto;
  fill: white;
  transition: all 1s ease-in-out;
}
.logo:hover {
  opacity: 0.4;
  filter: blur(3px);
}
.nav > * {
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3.5rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}
.nav > *:last-of-type {
  margin-right: 0;
}
.nav > *:hover {
  color: var(--color-highlight);
  transition: all 300ms ease-in;
}
.nav > .active {
  color: var(--color-highlight);
}
.mobile-burger {
  display: none;
}

.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateX(+120%);
  }
  100% {
    transform: translateX(0);
  }
}
@media (max-width: 800px) {
  .header {
    position: relative;
    margin-bottom: 0;
  }
  .nav > * {
    font-size: 1rem;
  }
  .nav {
    flex-direction: column;
    justify-items: right;
    display: none;
  }
  .intro {
    width: 60%;
    margin-right: 5%;
  }
  .nav__link {
    margin: 0;
    text-align: right;
  }
  .nav__link:hover {
    text-decoration: none;
  }
  .intro p {
    font-size: 1rem;
  }
  .mobile-burger {
    width: 40px;
    display: block;
  }
  .mobile-burger hr {
    transition: all 150ms ease;
  }
  .mobile-x hr:first-child {
    border: 1px solid white;
    transform: rotate(45deg);
  }
  .mobile-x hr:nth-child(2) {
    transform: rotate(-45deg);
    border: 1px solid white;
    position: relative;
    top: -12px;
  }
  .mobile-burger.mobile-x {
    position: fixed;
    right: 30px;
    top: 44px;
    color: white;
    margin-left: 80%;
    z-index: 1;
    transition: all 700ms ease-in;
  }
}
</style>
