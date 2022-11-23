<script>

// import necessary components
import LogoImage from "./LogoImage.vue";
import NavBar from "./NavBar.vue";
import GroupSearch from "./GroupSearch.vue";


export default {
    name: "AppHeader",
    components: {
        LogoImage,
        NavBar,
        GroupSearch
    }
}

</script>

<template>

    <!-- site header -->
    <header id="site_header">

        <div class="container-fluid">

            <div class="row">

                <!-- logo image component in column -->
                <LogoImage />


                <!-- navbar component in column -->
                <NavBar />

                <!-- search and language group component in column -->
                <GroupSearch />

            </div>

        </div>

    </header>

</template>

<style lang="scss" scoped>

</style>