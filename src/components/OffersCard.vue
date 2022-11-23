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

                <div class="hidden_info">
                    <div class="mb-3">
                        <span class="lessons">
                            <font-awesome-icon icon="fa-solid fa-file" /> {{ offer.lessons }} lessons
                        </span>

                        <span class="students">
                            <font-awesome-icon icon="fa-solid fa-user" /> {{ offer.students }} students
                        </span>

                    </div>

                    <p>{{ store.cutParagraph(offer.purpose) }}</p>
                </div>

            </div>

        </div>


    </div>


</template>