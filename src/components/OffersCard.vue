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

    <!-- single column with card offer -->
    <div class="col-3">

        <div class="card position-relative">

            <!-- cover image -->
            <img :src="store.getImagePath(offer.imageURL)" alt="">

            <!-- container for price offer and description -->
            <div class="price_offer position-absolute bottom-0">

                <h4 class="price">{{ offer.price }}</h4>

                <h5 class="description">{{ offer.description }}</h5>

                <!-- container with hidden infos -->
                <div class="hidden_info">

                    <div class="mb-3">

                        <!-- number of lessons -->
                        <span class="lessons">

                            <font-awesome-icon icon="fa-solid fa-file" /> {{ offer.lessons }} lessons

                        </span>

                        <!-- number of students -->
                        <span class="students">

                            <font-awesome-icon icon="fa-solid fa-user" /> {{ offer.students }} students

                        </span>

                    </div>

                    <!-- paragraph offer disclaimer -->
                    <p>{{ store.cutParagraph(offer.purpose) }}</p>

                </div>

            </div>

        </div>


    </div>


</template>