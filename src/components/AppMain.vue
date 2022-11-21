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

</template>

<style lang="scss" scoped>

</style>