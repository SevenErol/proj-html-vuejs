<script>

import { store } from '../store';

import FooterInfo from './FooterInfo.vue';

export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    components: {
        FooterInfo
    }
}

</script>

<template>

    <section id="site_footer">

        <div class="container">

            <div class="row">

                <FooterInfo v-for="(info, index) in store.infos" :info="info" :index="index" />

            </div>

            <div class="text-center">{{ store.copyright }}</div>

        </div>

    </section>

</template>

<style lang="scss" scoped>

</style>