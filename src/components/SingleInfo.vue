<script>

export default {
    name: "Singleinfo",
    props: {
        phrase: String
    }
}

</script>

<template>

    <!-- single link in footer info -->
    <p><a href="#">{{ phrase }}</a></p>

</template>