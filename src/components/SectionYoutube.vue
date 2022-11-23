<script>

// import store JS object
import { store } from '../store';

// import necessary components
import FaqComponent from './FaqComponent.vue';

export default {
    name: "SectionYoutube",
    data() {
        return {
            store
        }
    },
    components: {
        FaqComponent
    }
}

</script>

<template>

    <!-- section site youtube video -->
    <section id="youtube">

        <div class="container position-relative">

            <!-- image dots square shape  -->
            <img src="../assets/img/maxcoach-shape-07.png" alt="" class="position-absolute bottom-0">

            <div class="row align-items-center p-3">

                <!-- single column with Youtube video -->
                <div class="col-6">

                    <!-- dinamically generated Youtube thumbnail and player icon -->
                    <div class="img_container position-relative">

                        <img :src="store.getImagePath(store.thumbYoutube)" alt="" class="img-fluid">
                        <img :src="store.getImagePath(store.iconYoutube)" alt=""
                            class="position-absolute top-50 start-50 translate-middle">

                    </div>

                </div>

                <!-- single column with worldmap background-->
                <div class="col-6 worldmap">

                    <div class="col-8">

                        <h2>To Thrive in Business Today, You will need a Good Plan </h2>

                        <!-- FAQ section  -->
                        <div class="faq text-white">

                            <!-- v-for directive to dinamically generate frequently asked question -->
                            <FaqComponent v-for="question in store.faq" :questions="question" />
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>



</template>