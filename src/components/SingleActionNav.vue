<script>

export default {
    name: "SingleActionNav",
    props: {
        action: String
    }
}
</script>

<template>

    <!-- single action in dropdown menu -->
    <li><a class="dropdown-item" href="#">{{ action }}</a></li>

</template>