<script>

// import store JS object
import { store } from '../store';

// import necessary components
import SingleReview from './SingleReview.vue';

export default {
    name: "SectionReviews",
    data() {
        return {
            store
        }
    },
    components: {
        SingleReview
    }
}

</script>

<template>

    <!-- section site reviews -->
    <section id="reviews" class="p-3">

        <div class="container">

            <!-- container section titles  -->
            <div class="titles p-3 text-center">

                <h5 class="mb-3 section_title">People are praising MaxCoach</h5>

                <h1>What make they love us?</h1>

            </div>

            <div class="row justify-content-center p-3">

                <!-- single column in row to display carousel -->
                <div class="col-6">

                    <!-- carousel container -->
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">

                        <!-- carousel indicators slide position -->
                        <div class="carousel-indicators">

                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>

                        </div>

                        <!-- inner part of carousel cards display -->
                        <div class="carousel-inner">

                            <!-- v-for directive to dinamically generate single review -->
                            <SingleReview v-for="(review, index) in store.reviews" :review="review" :index="index" />

                        </div>

                        <!-- button control previous slide  -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>

                        <!-- button control next slide  -->
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>


</template>