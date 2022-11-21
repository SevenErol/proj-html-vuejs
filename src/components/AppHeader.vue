<script>

import { store } from "../store";

import LogoImage from "./LogoImage.vue";
import SingleNavEl from "./SingleNavEl.vue";
import LanguageMenu from "./LanguageMenu.vue";
export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    components: {
        LogoImage,
        SingleNavEl,
        LanguageMenu
    }
}

</script>

<template>

    <header id="site_header">

        <div class="container-fluid">

            <div class="row">

                <LogoImage />


                <div class="col-6">

                    <nav class="navbar navbar-expand-lg">

                        <div class="container-fluid">

                            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">

                                <ul class="navbar-nav">
                                    <SingleNavEl v-for="object in store.navigationVoices" :voice="object" />
                                </ul>

                            </div>

                        </div>

                    </nav>

                </div>

                <div class="search_button col-4 d-flex align-items-center">

                    <div class="row">

                        <LanguageMenu />

                        <div class="col-6 d-flex align-items-center p-2">
                            <input type="text" class="searchbox me-2" placeholder="Search...">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </div>

                    </div>


                </div>



            </div>
        </div>

    </header>

</template>

<style lang="scss" scoped>

</style>