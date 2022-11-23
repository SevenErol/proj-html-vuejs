<script>

// import store JS object
import { store } from '../store';

// import necessary components
import ApproachCard from './ApproachCard.vue';

export default {
    name: "SectionApproach",
    data() {
        return {
            store
        }
    },
    components: {
        ApproachCard
    }
}

</script>

<template>

    <!-- section site approach  -->
    <section id="dream_together" class="p-3">

        <div class="container">

            <!-- container for section titles -->
            <div class="titles p-3 text-center">

                <h5 class="mb-3 section_title">Let's Dream Big Together</h5>

                <h4>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and
                    apply
                    executive coaching in the new age fo digitalization.</h4>

            </div>

            <div class="row">

                <!-- v-for directive to generate dinamically approaches column -->
                <ApproachCard v-for="card in store.approach" :card="card" />

            </div>

            <!-- container for buttons  -->
            <div class="ms_buttons text-center">

                <!-- button learn more  -->
                <button type="button" class="btn learn">Learn more</button>

                <!-- button get started -->
                <button type="button" class="btn start">Get started today</button>

            </div>

        </div>

    </section>


</template>