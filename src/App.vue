<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { onMounted } from "vue";

onMounted(() => {
    alert("This website it still under development. THIS IS A DRAFT.");
});
</script>

<template>
    <nav-bar />
    <RouterView />
</template>

<style scoped></style>
