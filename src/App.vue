<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <div class="div-main-container">
        <nav-bar />
        <RouterView />
    </div>
</template>

<style scoped>
.div-main-container {
    background-color: var(--black);
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    position: relative;

    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
