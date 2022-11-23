<script>

// import store JS object
import { store } from '../store';

// import necessary components
import SingleEvent from './SingleEvent.vue';

export default {
    name: "SectionEvents",
    data() {
        return {
            store
        }
    },
    components: {
        SingleEvent
    }
}

</script>

<template>

    <!-- section site events list -->
    <section id="events">

        <div class="container">

            <!-- container for section title -->
            <div class="titles p-3 text-center">

                <h5 class="mb-3 section_title">Wanna transform your life?</h5>

                <h1>Upcoming events</h1>

            </div>


            <div class="row">

                <!-- v-for directive to dinamically generate single event -->
                <SingleEvent v-for="event in store.events" :event="event" />

            </div>

            <!-- container with paragraph and link for new events -->
            <p class="all_events text-center">Excited about our events? <a href="#"><strong>View all events
                        <span>&rightarrow;</span></strong></a></p>

        </div>

    </section>

</template>