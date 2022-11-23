<script>

// import store JS object 
import { store } from '../store';

// import necessary components
import HelpCard from './HelpCard.vue';

export default {
    name: "SectionHelp",
    data() {
        return {
            store
        }
    },
    components: {
        HelpCard
    }
}

</script>

<template>

    <!-- section site help card -->
    <section id="help">

        <div class="container p-3">

            <!-- container for titles section -->
            <div class="titles p-3 text-center">

                <h5 class="mb-3 section_title">Let's Dream Big Together</h5>

                <h1>Explore How can i help you</h1>

            </div>

            <div class="row">

                <!-- v-for directive to dinamically generate cards -->
                <HelpCard v-for="help in store.helpCards" :help="help" />

            </div>

        </div>

    </section>

</template>