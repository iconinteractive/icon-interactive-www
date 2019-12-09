<template>
  <div>
    <div class="latest-events-heading">
      <h2>
        <g-link class="link" to="/events">Events</g-link>
      </h2>
    </div>
    <div class="latest-events">
      <g-link :to="item.node.path" class="event" v-for="item in events" :key="item.node.id">
        <h3 class="event-title">{{ item.node.title }}</h3>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.latest-events-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
}
.latest-events {
  max-width: 100%;
  margin: 1rem 0;
}
.latest-events > .container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.event {
  flex: 0 0 100%;
  display: block;
  padding: 0rem;
  transition: all 300ms ease;
  text-decoration: none;
  border: 1px solid var(--color-base);
}

.event:last-of-type {
  border-bottom: 0;
}

.event:hover {
  border: 1px solid var(--color-highlight);
  color: #fff;
  transition: background 300ms ease;
}

.event-title {
  font-size: 1rem;
  line-height: 1.35;
}

.link {
  text-decoration: none;
  transition: all 500ms ease-out;
}

.link:hover {
  transition: all 500ms ease-out;
  text-decoration: underline;
}

@media (min-width: 580px) {
  .event {
    flex: 0 0 50%;
  }
}

@media (min-width: 920px) {
  .event {
    flex: 0 0 25%;
  }
}
</style>
