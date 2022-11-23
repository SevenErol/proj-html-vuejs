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

    <div class="carousel-item" :class="index === 0 ? 'active' : ''">

        <div class="card p-3">
            <p><strong>{{ review.disclaimer }}</strong></p>

            <p>{{ review.review }}</p>

            <div class="row">
                <div class="col-4 d-flex justify-content-center">
                    <img :src="store.getImagePath(review.avatar)" alt="" class="img-fluid">
                </div>
                <div class="col-8">
                    <h6>{{ review.name }}</h6>
                    <p>{{ review.work }}</p>
                </div>
            </div>
        </div>

    </div>




</template>