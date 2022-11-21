<script>

import GetStarted from './GetStarted.vue';
import BusinessHero from './BusinessHero.vue';

export default {
  name: "AppMain",
  components: {
    GetStarted,
    BusinessHero
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

  <section class="dream_together">

    <div class="container">

      <div class="titles p-3 text-center">

        <h5 class="mb-3">Let's Dream Big Together</h5>

        <h4>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply
          executive coaching in the new age fo digitalization.</h4>

      </div>

      <div class="row">

        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4"></div>

      </div>


    </div>
  </section>

</template>

<style lang="scss" scoped>

</style>