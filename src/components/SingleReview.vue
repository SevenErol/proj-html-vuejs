<script>

import { store } from '../store';

export default {
    name: "SingleReview",
    props: {
        review: Object,
        index: Number
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <!-- single carousel item -->
    <div class="carousel-item" :class="index === 0 ? 'active' : ''">

        <div class="card p-3">

            <!-- sinthesis of review -->
            <p><strong>{{ review.disclaimer }}</strong></p>

            <!-- actual review -->
            <p>{{ review.review }}</p>

            <div class="row">

                <!-- column with avatar -->
                <div class="col-4 d-flex justify-content-center">
                    <img :src="store.getImagePath(review.avatar)" alt="" class="img-fluid">
                </div>

                <!-- column with review and work -->
                <div class="col-8">

                    <h6>{{ review.name }}</h6>
                    <p>{{ review.work }}</p>

                </div>

            </div>

        </div>

    </div>

</template>