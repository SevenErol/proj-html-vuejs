<script>

// import store JS object
import { store } from '../store';

// import necessary components
import FooterInfo from './FooterInfo.vue';

export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    components: {
        FooterInfo
    }
}

</script>

<template>

    <!-- site footer  -->
    <footer id="site_footer" class="position-relative">

        <div class="container">

            <div class="row">

                <!-- v-for directive to dinamically generate infos  -->
                <FooterInfo v-for="(info, index) in store.infos" :info="info" :index="index" />

            </div>

            <!-- container for copyright -->
            <div class="text-center">{{ store.copyright }}</div>

        </div>

        <!-- container for arrow to redirect to start page -->
        <div id="arrow" class="position-absolute bottom-0 end-0 d-flex justify-content-center align-items-center">
            <a href="#">&UpArrow;</a>
        </div>

    </footer>

</template>

<style lang="scss" scoped>

</style>