<script>
import { store } from '../store';

export default {
    name: "OffersCard",
    props: {
        offer: Object
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <div class="col-3">

        <div class="card position-relative">

            <img :src="store.getImagePath(offer.imageURL)" alt="">

            <div class="price_offer position-absolute bottom-0">

                <h4 class="price">{{ offer.price }}</h4>

                <h5 class="description">{{ offer.description }}</h5>

            </div>

        </div>


    </div>


</template>