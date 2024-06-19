<script setup lang="ts"></script>

<template>
    <div class="div-slide-show">
        <img src="/image_1.jpg" />
        <h1>QUTRC Rover</h1>
    </div>
</template>

<style scoped lang="scss">
.div-slide-show {
    width: 100vw;
    height: calc(100vh - 50px);
    border-bottom: var(--accent) solid 1px;
    position: relative;

    &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        background: linear-gradient(135deg, var(--black), transparent);
    }

    img {
        height: 100%;
        object-fit: cover;
    }

    h1 {
        position: absolute;
        top: 30%;
        left: 30%;
        transform: translate(-50%, -50%);
        color: var(--white);
        z-index: 5;
        font-size: 40px;
    }
}
</style>
