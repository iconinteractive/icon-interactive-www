<template>
  <nav class="mobile-nav-wrap" :class="{ active: menuOn }">
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
    close: Function
  }
};
</script>

<style scoped>
.mobile-nav-wrap {
  transform: translateX(+100%);
  transition: all 500ms ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-highlight);
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
  text-transform: uppercase;
  margin: 20% 10%;
}
.logo {
  width: 50px;
  margin-top: 40%;
}
.menu a {
  margin: 1rem;
}
.menu a:last-child {
  display: flex;
  justify-content: center;
}
.active {
  transform: translateX(0);
}
</style>