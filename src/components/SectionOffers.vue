<script>

// import store JS object
import { store } from '../store';

// import necessary components
import OffersCard from './OffersCard.vue';

export default {
    name: "SectionOffers",
    data() {
        return {
            store
        }
    },
    components: {
        OffersCard
    }
}

</script>

<template>

    <!-- section site offers card -->
    <section id="offers">

        <div class="container p-3">

            <!-- container section titles  -->
            <div class="titles p-3 text-center">

                <h5 class="mb-3 section_title">Let's Dream Big Together</h5>

                <h1>Explore How can i help you</h1>

            </div>

            <div class="row">

                <!-- v-for directive to dinamically generate offers cards -->
                <OffersCard v-for="offer in store.offers" :offer="offer" />

            </div>

            <!-- courses bottom description and link -->
            <p class="courses text-center">Take the control of their life back and start doing things to make their
                dream
                come true. <a href="#"><strong>View all courses <span>&rightarrow;</span></strong></a></p>

        </div>

    </section>


</template>