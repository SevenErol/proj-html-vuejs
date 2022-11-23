<script>

import SingleInfo from './SingleInfo.vue';

export default {
    name: "FooterInfo",
    props: {
        info: Object,
        index: Number
    },
    components: {
        SingleInfo
    }
}

</script>

<template>

    <div :class="index === 0 ? 'col-6' : 'col-2'">

        <h6 class="mb-3">{{ info.name }}</h6>

        <SingleInfo v-for="paragraph in info.list" :phrase="paragraph" />

        <div v-if="index === 0">

            <font-awesome-icon icon="fa-brands fa-facebook" class="icon" />

            <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />

            <font-awesome-icon icon="fa-brands fa-instagram" class="icon" />

            <font-awesome-icon icon="fa-brands fa-linkedin" class="icon" />
        </div>
    </div>


</template>