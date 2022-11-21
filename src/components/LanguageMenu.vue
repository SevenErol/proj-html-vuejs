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

    <div class="col-6 d-flex align-items-center">

        <img :src="store.getImagePath(store.selectLanguage.flagURL)" :alt="store.selectLanguage.language" class="p-2">

        <span class="dropdown p-2">

            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ store.selectLanguage.extendedName }}
            </a>

            <ul class="dropdown-menu">
                <LanguageSelection v-for="object in store.nations" :language="object"
                    @changeClick="changeLang(object)" />
            </ul>

        </span>

        <span>
            <font-awesome-icon icon="fa-solid fa-user" />
        </span>


    </div>

</template>