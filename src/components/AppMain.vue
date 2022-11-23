<script>
import { store } from '../store';

import SectionBanner from './SectionBanner.vue';
import SectionApproach from './SectionApproach.vue';
import SectionHelp from './SectionHelp.vue';
import SectionOffers from './SectionOffers.vue';
import SectionYoutube from './SectionYoutube.vue';
import SectionEvents from './SectionEvents.vue';
import SectionReviews from './SectionReviews.vue';
import SectionSubscribe from './SectionSubscribe.vue';

export default {
  name: "AppMain",
  components: {
    SectionBanner,
    SectionApproach,
    SectionHelp,
    SectionOffers,
    SectionYoutube,
    SectionEvents,
    SectionReviews,
    SectionSubscribe
  }
}

</script>

<template>

  <!-- main site page -->
  <main>

    <!-- component section site banner -->
    <SectionBanner />

    <!-- component section site approaches -->
    <SectionApproach />

    <!-- component section site help cards -->
    <SectionHelp />

    <!-- component section site offer cards -->
    <SectionOffers />

    <!-- component section site youtube video -->
    <SectionYoutube />

    <!-- component section site events -->
    <SectionEvents />

    <!-- component section site reviews cards -->
    <SectionReviews />

    <!-- component section site subscription -->
    <SectionSubscribe />

  </main>

</template>

<style lang="scss" scoped>

</style>