<script>

import { store } from '../store';

export default {
    name: "HelpCard",
    props: {
        help: Object
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <!-- single column with card help -->
    <div class="col-4">

        <div class="card">

            <div>
                <!-- image cover  -->
                <img :src="store.getImagePath(help.imageURL)" alt="" class="img-fluid">

                <h4 class="m-3 text-center">{{ help.title }}</h4>

                <p class="m-3 text-center">{{ help.paragraph }}</p>
            </div>

            <!-- discover more link -->
            <a href="#" class="m-3 text-center">{{ help.discover }} <span>&RightArrow;</span></a>

        </div>

    </div>

</template>