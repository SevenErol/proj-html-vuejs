<script>

export default {
    name: "FaqComponent",
    props: {
        questions: Object
    },
    methods: {
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
            <span v-if="!questions.visible">
                <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
            </span>
            <span v-else>
                <font-awesome-icon icon="fa-solid fa-circle-arrow-up" />
            </span>
            {{ questions.question }}
        </h5>

        <p v-show="questions.visible">{{ questions.answer }}</p>
    </div>


</template>