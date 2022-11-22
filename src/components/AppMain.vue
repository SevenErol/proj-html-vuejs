<script>
import { store } from '../store';

import GetStarted from './GetStarted.vue';
import BusinessHero from './BusinessHero.vue';
import ApproachCard from './ApproachCard.vue';

export default {
  name: "AppMain",
  components: {
    GetStarted,
    BusinessHero,
    ApproachCard
  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>

  <section id="site_banner">

    <div class="container banner">

      <div class="row align-items-center justify-content-between">

        <GetStarted />

        <BusinessHero />

      </div>

    </div>

  </section>

  <section id="dream_together" class="p-3">

    <div class="container">

      <div class="titles p-3 text-center">

        <h5 class="mb-3 dream">Let's Dream Big Together</h5>

        <h4>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply
          executive coaching in the new age fo digitalization.</h4>

      </div>

      <div class="row">

        <ApproachCard v-for="card in store.approach" :card="card" />

      </div>

      <div class="ms_buttons text-center">

        <button type="button" class="btn learn">Learn more</button>

        <button type="button" class="btn start">Get started today</button>

      </div>


    </div>
  </section>

</template>

<style lang="scss" scoped>

</style>