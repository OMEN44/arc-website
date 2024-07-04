<script setup lang="ts"></script>

<template>
    <div class="title">
        <h1>Project Olympus</h1>
        <p>QUTRC ROVER TEAM</p>
    </div>
</template>

<style scoped lang="scss">
.title {
    margin: 10px;
    padding: 5px 10px;
    background: var(--secondary);
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius);

    * {
        font-family: "Bebas Neue", sans-serif;
    }

    h1 {
        font-size: 40px;
        margin-bottom: -5px;
        color: var(--white);
    }

    p {
        margin-top: -15px;
        font-size: 19px;
        color: var(--accent);
    }
}
</style>
