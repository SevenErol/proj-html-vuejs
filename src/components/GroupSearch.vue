<script>

// import store JS object
import { store } from '../store';

// import necessary components
import LanguageMenu from "./LanguageMenu.vue";
import SearchSection from "./SearchSection.vue";

export default {
    name: "GroupSearch",
    data() {
        return {
            store
        }
    },
    components: {
        LanguageMenu,
        SearchSection
    }
}

</script>

<template>

    <div class="search_button col-4 d-flex align-items-center">

        <div class="row">

            <!-- component in column for language choice -->
            <LanguageMenu />

            <!-- component in column to search in site -->
            <SearchSection />

        </div>

    </div>

</template>