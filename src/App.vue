<script>

// import necessary components
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>

  <!-- component header -->
  <AppHeader />

  <!-- component main -->
  <AppMain />

  <!-- component footer -->
  <AppFooter />

</template>

<style lang="scss" scoped>

</style>
