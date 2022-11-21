<script>

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

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ voice.voice }}
        </a>
        <ul class="dropdown-menu">

            <SingleActionNav v-for="action in voice.actions" :action="action" />

        </ul>
    </li>

</template>