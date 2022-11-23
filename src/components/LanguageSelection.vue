<script>


export default {
    name: "LanguageSelection",
    props: {
        language: Object
    }
}
</script>

<template>

    <!-- single list item with language option -->
    <li><a href="#" class="dropdown-item" @click="$emit('changeClick')"> {{ language.extendedName }} </a></li>

</template>