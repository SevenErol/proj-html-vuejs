<script>

export default {
    name: "FaqComponent",
    props: {
        questions: Object
    },
    methods: {
        // function to visualize question
        visibility() {
            if (this.questions.visible === true) {
                return this.questions.visible = false
            }

            this.questions.visible = true
        }
    }
}

</script>

<template>

    <div class="border-bottom border-white">

        <h5 class="mb-3" :class="questions.visible ? 'jungle' : ''" @click="visibility()">

            <!-- icon to show if answer is shown -->
            <span v-if="!questions.visible">
                <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
            </span>

            <!-- icon to show if answer is hidden -->
            <span v-else>
                <font-awesome-icon icon="fa-solid fa-circle-arrow-up" />
            </span>

            {{ questions.question }}

        </h5>

        <!-- answer to show when visibility is equal true -->
        <p v-show="questions.visible">{{ questions.answer }}</p>

    </div>

</template>