<template>
  <Layout>
    <div class="container">
      <h1 class="title-sticky">Clients</h1>
      <section class="text-container">
        <ul>
          <li>Ann Arbor Distilling Company</li>
          <li>Audi Automotive Hall of Fame</li>
          <li>AwesomenessTV</li>
          <li>Beastie Boys</li>
          <li>BioVigil</li>
          <li>BMW</li>
          <li>Bob Dylan</li>
          <li>Bonnaroo</li>
          <li>C3 Workforce</li>
          <li>Capitol Records</li>
          <li>Chrysler</li>
          <li>Def Jam Recordings</li>
          <li>Delphi Digital Theater Systems (DTS)</li>
          <li>Encore Michigan Farm Aid</li>
          <li>Fiat Chrysler Automobiles</li>
          <li>Food Gatherers Goldenvoice - Panorama</li>
          <li>Harvard University</li>
          <li>Jaguar</li>
          <li>Jennifer Lopez</li>
          <li>Katy Perry</li>
          <li>Land Rover</li>
          <li>Les Paul</li>
          <li>MINI</li>
          <li>NexCare</li>
          <li>Nissan</li>
          <li>Panasonic</li>
          <li>Paul McCartney</li>
          <li>Phish</li>
          <li>Politicon</li>
          <li>Red Light Management</li>
          <li>QuikOrder</li>
          <li>SiriusXM</li>
          <li>Skipstone</li>
          <li>Subaru</li>
          <li>Tony Margherita Management</li>
          <li>Toyota</li>
          <li>True Zero</li>
          <li>University of Michigan</li>
          <li>Village Green Communications</li>
          <li>Volkswagen</li>
          <li>Wildly Fit</li>
        </ul>
        <LatestEvents :events="$page.events.edges" />
      </section>
    </div>
  </Layout>
</template>

<page-query>
query events {
  events: allEventPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import LatestEvents from "@/components/LatestEvents";

export default {
  components: {
    LatestEvents
  }
};
</script>

<style scoped>
li {
  margin: 0.5rem;
  padding-left: 0.5rem;
}
h2 {
  margin-top: 3rem;
}
.grid-four {
  display: grid;
  grid-template-columns: 4fr 4fr;
  grid-gap: 4rem;
}
@media (max-width: 700px) {
  .about-text {
    margin-left: 30%;
  }
}
</style>


