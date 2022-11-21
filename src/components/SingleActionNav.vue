<script>

export default {
    name: "SingleActionNav",
    props: {
        action: String
    }
}
</script>

<template>

    <li><a class="dropdown-item" href="#">{{ action }}</a></li>

</template>