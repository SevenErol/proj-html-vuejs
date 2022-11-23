<script>

import { store } from "../store";

import LanguageSelection from "./LanguageSelection.vue";

export default {
    name: "LanguageMenu",
    data() {
        return {
            store
        }
    },
    components: {
        LanguageSelection
    },
    methods: {
        changeLang(object) {
            this.store.selectLanguage = object
        }
    }
}

</script>

<template>

    <!-- single column with language menu -->
    <div class="col-6 d-flex align-items-center">

        <!-- flag image -->
        <img :src="store.getImagePath(store.selectLanguage.flagURL)" :alt="store.selectLanguage.language" class="p-2">

        <span class="dropdown p-2">

            <!-- language choice toggle  -->
            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ store.selectLanguage.extendedName }}
            </a>

            <!-- dropdown menu -->
            <ul class="dropdown-menu">

                <!-- v-for directive to dinamically generate languages options -->
                <LanguageSelection v-for="object in store.nations" :language="object"
                    @changeClick="changeLang(object)" />

            </ul>

        </span>

        <!-- container with user icon -->
        <span class="user_icon">

            <font-awesome-icon icon="fa-solid fa-user" />

        </span>

    </div>

</template>