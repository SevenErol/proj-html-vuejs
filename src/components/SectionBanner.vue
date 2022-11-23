<script>

// import store JS object
import { store } from '../store';

// import necessary components
import GetStarted from './GetStarted.vue';
import BusinessHero from './BusinessHero.vue';

export default {
    name: "SectionBanner",
    data() {
        return {
            store
        }
    },
    components: {
        GetStarted,
        BusinessHero
    }
}


</script>


<template>

    <!-- section site banner  -->
    <section id="site_banner">

        <div class="container banner">

            <div class="row align-items-center justify-content-between">

                <!-- component column with titles and button -->
                <GetStarted />

                <!-- component column with business hero image -->
                <BusinessHero />

            </div>

        </div>

    </section>


</template>