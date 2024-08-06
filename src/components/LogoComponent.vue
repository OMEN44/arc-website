<script setup lang="ts"></script>

<template>
    <div class="title container">
        <RouterLink to="home">
            <h1>R.O.A.R.</h1>
            <p>QUTRC ROVER TEAM</p>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
a {
    margin: 0 !important;
    text-decoration: none;
    user-select: none;
}

.title {
    padding: 5px 10px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    width: fit-content;
    cursor: pointer;

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
