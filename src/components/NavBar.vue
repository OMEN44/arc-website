<script setup lang="ts">
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";
import Title from "./Title.vue";

const timer = ref<string>("00:00:00");
let interval: number | undefined = undefined;
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
            <Title />
            <div class="mobile-menu" @click="showMenu = !showMenu">
                <FontAwesomeIcon :icon="faBars" />
            </div>
        </div>
        <div class="navigation">
            <div :class="`top ${showMenu ? 'show' : ''}`">
                <div class="navigation-links">
                    <RouterLink class="link" to="/home">Home</RouterLink>
                    <RouterLink class="link" to="/about">Team</RouterLink>
                    <RouterLink class="link" to="/home">Rover</RouterLink>
                </div>
                <div class="social-media-links">
                    <a href="https://www.facebook.com/QUTRoboticsClub">
                        <FontAwesomeIcon :icon="faInstagram" />
                    </a>
                    <a href="https://www.facebook.com/QUTRoboticsClub">
                        <FontAwesomeIcon :icon="faFacebook" />
                    </a>
                    <a href="https://www.facebook.com/QUTRoboticsClub">
                        <FontAwesomeIcon :icon="faTiktok" />
                    </a>
                    <a href="https://www.facebook.com/QUTRoboticsClub">
                        <FontAwesomeIcon :icon="faLinkedin" />
                    </a>
                </div>
            </div>
            <div class="bottom">
                <span class="countdown" v-text="timer"></span>
                <a href="https://qutrobotics.com/contact">Join us</a>
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
            background-color: var(--secondary);
            padding: 2px 10px;
            border-radius: var(--radius);
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

// .navigation-container {
//     background-color: var(--primary);
//     position: absolute;
//     width: 100%;
//     display: flex;
//     color: var(--white);
//     z-index: 10;

//     height: 100px;

//     .navigation {
//         background-color: var(--primary);
//         flex: 1;
//         margin: 10px 10px 10px 0;
//         height: fit-content;
//         z-index: 11;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;

//         .mobile-menu {
//             display: none;
//         }

//         .top {
//             display: flex;
//             justify-content: space-between;
//             padding: 10px 0;

//             svg {
//                 width: 18px;
//                 height: 18px;
//                 cursor: pointer;
//             }
//         }

//         .bottom {
//             display: flex;
//             justify-content: space-between;
//             background-color: var(--secondary);
//             padding: 2px 10px;
//         }

//         a {
//             margin: auto 5px 0 5px;
//             text-decoration: none;
//             color: var(--white);
//         }

//         // .div-mobile-menu,
//         // .div-social-media-mobile {
//         //     display: none;
//         // }

//         // .div-top {
//         //     margin: 15px 0;
//         //     display: flex;
//         // }

//         // .footer {
//         //     background-color: var(--secondary);
//         //     display: flex;
//         //     justify-content: space-between;
//         //     padding: 2px 10px;
//         //     font-size: large;
//         //     margin: 10px 10px 10px 0;

//         //     svg {
//         //         margin: 0 5px -1px 5px;
//         //         width: 18px;
//         //         height: 18px;
//         //         cursor: pointer;
//         //     }

//         //     a {
//         //         text-decoration: none;
//         //         color: var(--black);
//         //     }
//     }

//     //     @media (max-width: 1000px) {
//     //         position: relative;

//     //         .div-mobile-menu {
//     //             display: block;
//     //             text-align: right;
//     //             font-size: 30px;
//     //             margin-right: 15px;
//     //         }

//     //         .div-social-media,
//     //         .countdown {
//     //             display: none;
//     //         }

//     //         .div-top {
//     //             display: none;

//     //             &--show {
//     //                 position: absolute;
//     //                 background-color: var(--primary);
//     //                 border: 1px var(--accent);
//     //                 border-style: none none solid solid;
//     //                 display: flex;
//     //                 flex-direction: column;
//     //                 width: 100%;
//     //                 animation: openMenu 0.2s;
//     //                 height: 144px;
//     //                 overflow-y: hidden;

//     //                 .div-social-media-mobile {
//     //                     display: flex;
//     //                     height: 36px;
//     //                     margin: auto 15px;

//     //                     svg {
//     //                         color: var(--white);
//     //                         margin: 4px 10px 0 5px;
//     //                         width: 20px;
//     //                         height: 20px;
//     //                     }
//     //                 }
//     //             }

//     //             @keyframes openMenu {
//     //                 0% {
//     //                     height: 0;
//     //                 }
//     //                 100% {
//     //                     height: 144px;
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }
// }
</style>
