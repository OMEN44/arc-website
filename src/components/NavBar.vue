<script setup lang="ts"></script>

<template>
    <div class="div-navigation-container">
        <div class="div-logo">
            <img src="/qutrc_logo.png" alt="logo" />
        </div>
        <div class="div-navigation">
            <div class="div-top">
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/home">Team</RouterLink>
                <RouterLink to="/home">Rover</RouterLink>
            </div>
            <div class="div-bottom">
                <p>Social media</p>
                <p>Join us</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.div-navigation-container {
    // background-color: lime;
    width: 100vw;
    position: absolute;
    display: flex;
    color: var(--white);
    z-index: 10;

    .div-logo {
        background-color: var(--primary);
        // clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);
        padding: 20px;
        position: relative;
        border: 1px var(--accent);
        border-style: none solid solid none;

        // &::before {
        //     position: absolute;
        //     content: "";
        //     background-color: var(--accent);
        //     width: 100%;
        //     height: 100%;
        // }

        img {
            max-width: 100px;
        }
    }

    .div-navigation {
        background-color: var(--primary);
        flex: 1;
        margin-left: -1px;
        height: fit-content;
        z-index: 11;

        .div-top {
            margin: 15px auto;
            width: fit-content;
            display: flex;

            a {
                text-decoration: none;
                color: var(--white);
                font-size: 20px;
                margin: 0 20px;
            }
        }

        .div-bottom {
            background-color: var(--accent);
            display: flex;
            justify-content: space-between;
            height: fit-content;
            color: var(--black);
            padding: 2px 10px;
        }
    }
}
</style>
