<script>

// import store JS object
import { store } from '../store';

// import necessary components
import SingleNavEl from "./SingleNavEl.vue";

export default {
    name: "NavBar",
    data() {
        return {
            store
        }
    },
    components: {
        SingleNavEl
    }
}

</script>

<template>

    <!-- column with navigation voices  -->
    <div class="col-6">

        <nav class="navbar navbar-expand-lg">

            <div class="container-fluid">

                <!-- container for nav with dropdowns -->
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">

                    <!-- navbar voices list -->
                    <ul class="navbar-nav">

                        <!-- v-for directive to dinamically generate single nav element -->
                        <SingleNavEl v-for="object in store.navigationVoices" :voice="object" />

                    </ul>

                </div>

            </div>

        </nav>

    </div>

</template>