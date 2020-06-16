<template>
  <nav class="mobile-nav-wrap">
    <section class="menu">
      <g-link class="nav__link" to="/projects">Work</g-link>
      <g-link class="nav__link" to="/capabilities">Capabilities</g-link>
      <g-link class="nav__link" to="/news">News</g-link>
      <g-link class="nav__link" to="/about">About</g-link>
      <g-link class="nav__link" to="/connect">Connect</g-link>
      <g-link class="nav__link" to="/">
        <img src="../../static/icon-logo.svg" alt="icon logo" class="logo" />
      </g-link>
    </section>
  </nav>
</template>

<script>
export default {
  props: {
    menuOn: Boolean,
    close: Function,
  },
}
</script>

<style scoped>
.mobile-nav-wrap {
  transition: all 500ms ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #e51365;
  width: 75%;
  height: 120vh;
  margin: 0;
  z-index: -100;
}
.menu {
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Archivo Black";
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 40% 10%;
}
.logo {
  width: 45px;
  margin-top: 23%;
}
.menu a {
  margin: 1rem;
}
.menu a:last-child {
  display: flex;
  justify-content: center;
}
.nav__link {
  color: #fff;
}
</style>
