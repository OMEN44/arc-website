<script setup lang="ts">
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";

const timer = ref<string>("00:00:00");
let interval: number | undefined = undefined;
const finalDate = new Date("03/21/2025");
const showMenu = ref<boolean>(true);

onMounted(() => {
    interval = setInterval(() => {
        const millisecondDiff = finalDate.getTime() - new Date().getTime();

        var days = Math.floor(millisecondDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((millisecondDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((millisecondDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((millisecondDiff % (1000 * 60)) / 1000);

        timer.value = `Time until comp: ${days}:${hours}:${minutes}:${seconds}`;
    }, 1000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="div-navigation-container">
        <div class="div-logo">
            <img src="/qutrc_logo.png" alt="logo" />
        </div>
        <div class="div-navigation">
            <div class="div-mobile-menu" @click="showMenu = !showMenu">
                <FontAwesomeIcon :icon="faBars" />
            </div>
            <div :class="`div-top${showMenu ? '--show' : ''}`">
                <RouterLink class="link" to="/home">Home</RouterLink>
                <RouterLink class="link" to="/about">Team</RouterLink>
                <RouterLink class="link" to="/home">Rover</RouterLink>
                <div class="div-social-media-mobile">
                    <FontAwesomeIcon :icon="faInstagram" />
                    <FontAwesomeIcon :icon="faFacebook" />
                    <FontAwesomeIcon :icon="faTiktok" />
                    <FontAwesomeIcon :icon="faLinkedin" />
                </div>
            </div>
            <div class="div-bottom">
                <div class="div-social-media">
                    <FontAwesomeIcon :icon="faInstagram" />
                    <FontAwesomeIcon :icon="faFacebook" />
                    <FontAwesomeIcon :icon="faTiktok" />
                    <FontAwesomeIcon :icon="faLinkedin" />
                </div>
                <span class="countdown" v-text="timer"></span>
                <p>Join us</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.div-navigation-container {
    background-color: transparent;
    position: absolute;
    width: 100%;
    display: flex;
    color: var(--white);
    z-index: 10;

    .div-logo {
        background-color: var(--primary);
        padding: 20px;
        position: relative;
        border: 1px var(--accent);
        border-style: none solid solid none;
        border-radius: 0 0 25% 0;

        img {
            max-width: 100px;

            @media (max-width: 700px) {
                max-width: 75px;
            }
        }
    }

    .div-navigation {
        background-color: var(--primary);
        flex: 1;
        margin-left: -1px;
        height: fit-content;
        z-index: 11;

        .div-mobile-menu,
        .div-social-media-mobile {
            display: none;
        }

        .div-top {
            margin: 15px auto;
            width: fit-content;
            display: flex;
        }

        .div-bottom {
            background-color: var(--accent);
            display: flex;
            justify-content: space-between;
            height: fit-content;
            color: var(--black);
            padding: 2px 10px;
            font-size: large;

            svg {
                margin: 0 5px -1px 5px;
                width: 18px;
                height: 18px;
                cursor: pointer;
            }
        }

        @media (max-width: 700px) {
            position: relative;

            .div-mobile-menu {
                display: block;
                text-align: right;
                font-size: 30px;
                margin-right: 15px;
            }

            .div-social-media,
            .countdown {
                display: none;
            }

            .div-top {
                display: none;

                &--show {
                    position: absolute;
                    background-color: var(--primary);
                    border: 1px var(--accent);
                    border-style: none none solid solid;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    animation: openMenu 0.2s;
                    height: 144px;
                    overflow-y: hidden;

                    .div-social-media-mobile {
                        display: flex;
                        height: 36px;
                        margin: auto 15px;

                        svg {
                            margin: 4px 10px 0 5px;
                            width: 20px;
                            height: 20px;
                        }
                    }
                }

                @keyframes openMenu {
                    0% {
                        height: 0;
                    }
                    100% {
                        height: 144px;
                    }
                }
            }
        }
    }
}
</style>
