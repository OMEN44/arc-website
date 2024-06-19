<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <nav-bar />
    <div class="div-main-container">
        <RouterView />
    </div>
</template>

<style scoped>
.div-main-container {
    background-color: var(--black);
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
}
</style>
