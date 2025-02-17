<script setup lang="ts">
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";
import LogoComponent from "./LogoComponent.vue";

const timer = ref<string>("00:00:00");
let interval: NodeJS.Timeout | undefined = undefined;
const finalDate = new Date("03/21/2025");
const showMenu = ref<boolean>(false);

onMounted(() => {
    interval = setInterval(() => {
        const millisecondDiff = finalDate.getTime() - new Date().getTime();

        var days = Math.floor(millisecondDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((millisecondDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((millisecondDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((millisecondDiff % (1000 * 60)) / 1000);

        timer.value = `Time until comp: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }, 1000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="navigation-container">
        <div class="title">
            <LogoComponent />
            <div class="mobile-menu" @click="showMenu = !showMenu">
                <FontAwesomeIcon :icon="faBars" />
            </div>
        </div>
        <div class="navigation">
            <div :class="`top ${showMenu ? 'show' : ''}`">
                <div class="navigation-links">
                    <RouterLink class="link" to="/home">Home</RouterLink>
                    <RouterLink class="link" to="/team">Team</RouterLink>
                    <RouterLink class="link" to="/rover">Rovers</RouterLink>
                </div>
                <div class="social-media-links">
                    <a href="https://www.instagram.com/qut.roboticsclub/">
                        <FontAwesomeIcon :icon="faInstagram" />
                    </a>
                    <a href="https://www.facebook.com/QUTRoboticsClub">
                        <FontAwesomeIcon :icon="faFacebook" />
                    </a>
                    <a href="https://www.tiktok.com/@qutroboticsclub">
                        <FontAwesomeIcon :icon="faTiktok" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/qut-robotics-club/?originalSubdomain=au">
                        <FontAwesomeIcon :icon="faLinkedin" />
                    </a>
                </div>
            </div>
            <div class="bottom container">
                <span class="countdown" v-text="timer"></span>
                <RouterLink to="/team">Join the team</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.navigation-container {
    background-color: var(--primary);
    display: flex;
    z-index: 10;

    a {
        margin: auto 5px 0 5px;
        text-decoration: none;
        color: var(--white);
    }

    .title {
        @media (max-width: 800px) {
            display: flex;
        }

        .mobile-menu {
            color: var(--white);
            display: none;
            margin: auto 30px auto auto;
            transition: transform 0.5s;

            &:hover {
                cursor: pointer;
                transform: rotate(180deg);
            }

            @media (max-width: 800px) {
                display: block;
            }

            svg {
                width: 30px;
                height: 30px;
            }
        }
    }

    .navigation {
        margin: 10px 10px 10px 0;
        flex: 1;
        color: var(--white);
        display: flex;
        flex-direction: column;

        .top {
            flex: 1;
            display: flex;
            justify-content: space-between;

            .social-media-links,
            .navigation-links {
                margin: auto 0;
            }

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .bottom {
            display: flex;
            justify-content: space-between;
            padding: 2px 10px;
            margin: 0;

            a {
                font-weight: bold;
                transition: transform 0.5s;
                color: var(--accent);

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;

        .navigation {
            position: relative;
            z-index: 11;
            margin: 0;

            .top {
                display: none;
                background-color: var(--primary);
            }

            .show {
                position: absolute;
                display: flex;
                flex-direction: column;
                top: 100%;
                left: 0;
                width: 100%;

                .navigation-links {
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    padding: 10px;
                    background-color: var(--primary);
                }

                .social-media-links {
                    margin: 0 0 10px 20px;
                }
            }

            .bottom {
                display: none;
            }
        }
    }
}
</style>
