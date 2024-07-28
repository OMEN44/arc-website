<script setup lang="ts">
defineProps<{ title: string; description: string; image: string }>();
</script>

<template>
    <div class="welcome">
        <img :src="image" />
        <div class="title container">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.welcome {
    width: 100vw;
    height: 70vh;
    border-bottom: 2px solid var(--accent);
    position: relative;
    background-color: var(--black);
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        opacity: 0.5;
    }

    .title {
        position: absolute;
        z-index: 3;
        bottom: 0;
        width: 60%;

        @media (max-width: 800px) {
            width: calc(100% - 20px);
        }

        p {
            font-size: 20px;
        }
    }
}
</style>
