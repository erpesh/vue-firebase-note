<template>
  <div id="app">
    <header-component/>
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: { HeaderComponent }
};
</script>

<style>

</style>