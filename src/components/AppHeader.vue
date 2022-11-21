<script>

import { store } from "../store";

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <header>

        <div class="container-fluid">

            <div class="row">

                <div class="col-3">
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <img :src="store.getImagePath(store.path_logo)" alt="" class="img-fluid">
                        </div>
                    </div>

                </div>

                <div class="col-6">

                    <nav></nav>

                </div>

                <div class="col-3 d-flex">

                    <div class="lang"></div>
                    <div class="search"></div>

                </div>

            </div>
        </div>

    </header>

</template>

<style lang="scss" scoped>

</style>