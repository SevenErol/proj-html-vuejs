<script>

// import necessary components
import SingleActionNav from './SingleActionNav.vue';

export default {
    name: "SingleNavEl",
    props: {
        voice: Object
    },
    components: {
        SingleActionNav
    }
}

</script>

<template>

    <!-- single navigation link  -->
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ voice.voice }}
        </a>

        <!-- dropdown menu  -->
        <ul class="dropdown-menu">

            <!-- v-for directive to dinamically generate every action in dropdown -->
            <SingleActionNav v-for="action in voice.actions" :action="action" />

        </ul>
    </li>

</template>