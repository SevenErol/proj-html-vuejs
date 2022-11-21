<script>

import { store } from "../store";

export default {
    name: "LogoImage",
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <div class="col-2 d-flex align-items-center">

        <div class="row justify-content-center">

            <div class="col-6">
                <img :src="store.getImagePath(store.path_logo)" alt="" class="img-fluid">
            </div>
        </div>

    </div>

</template>