<script>
// import necessary components
import ApproachOne from './ApproachOne.vue';
import ApproachTwo from './ApproachTwo.vue';
import ApproachThree from './ApproachThree.vue';
import ApproachFour from './ApproachFour.vue';
import ApproachFive from './ApproachFive.vue';
import ApproachSix from './ApproachSix.vue';


export default {
    name: "ApproachCard",
    props: {
        card: Object
    },
    components: {
        ApproachOne,
        ApproachTwo,
        ApproachThree,
        ApproachFour,
        ApproachFive,
        ApproachSix
    }
}
</script>

<template>

    <!-- column single card approaches section -->
    <div class="col-4 d-flex gy-3">

        <!-- column with specific icon -->
        <div class="col-2">

            <component :is="card.component" />

        </div>

        <!-- column with cad title and description -->
        <div class="col-10">

            <h5>{{ card.title }}</h5>
            <p>{{ card.description }}</p>

        </div>

    </div>

</template>