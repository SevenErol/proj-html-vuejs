<script>


export default {
    name: "LanguageSelection",
    props: {
        language: Object
    }
}
</script>

<template>

    <li><a href="#" class="dropdown-item" @click="$emit('changeClick')"> {{ language.extendedName }} </a></li>


</template>