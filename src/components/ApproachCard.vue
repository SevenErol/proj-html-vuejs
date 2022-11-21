<script>


export default {
    name: "ApproachCard",
    props: {
        card: Object
    }
}
</script>

<template>

    <div class="col-4 d-flex">

        <div class="col-2">
            <img :src="card.approachPathImage" alt="">
        </div>

        <div class="col-10">
            <h5>{{ card.title }}</h5>
            <p>{{ card.description }}</p>
        </div>
    </div>


</template>