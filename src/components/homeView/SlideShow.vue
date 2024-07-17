<script setup lang="ts">
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";
import slidesJSON from "../../slideShow.json";

const playSlideShow = ref<boolean>(true);
const slideShowIndex = ref<number>(0);
let interval: NodeJS.Timeout | undefined = undefined;

const slides =
    ref<Array<{ path: string; title: string; text: string; route: string | null }>>(slidesJSON);

onMounted(() => {
    interval = setInterval(() => {
        if (playSlideShow.value) {
            slideShowIndex.value = (slideShowIndex.value + 1) % slides.value.length;
        }
    }, 5000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<template>
    <div id="slide-show" class="slide-show">
        <img :src="slides[slideShowIndex].path" />
        <div class="slide-info container">
            <div class="slide-title">
                <h1>{{ slides[slideShowIndex].title }}</h1>
                <button v-if="slides[slideShowIndex].route !== null">
                    <RouterLink :to="slides[slideShowIndex].route!">See more</RouterLink>
                </button>
            </div>
            <p v-text="slides[slideShowIndex].text"></p>
            <div class="slide-icons">
                <span
                    :class="`slide pause-play ${!playSlideShow ? 'center' : ''}`"
                    @click="playSlideShow = !playSlideShow">
                    <FontAwesomeIcon :icon="playSlideShow ? faPause : faPlay" />
                </span>
                <span
                    class="slide"
                    v-for="(slide, index) in slides"
                    :class="{ active: index === slideShowIndex }"
                    @click="slideShowIndex = index">
                    <img :src="slide.path" alt="" />
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.slide-show {
    overflow-x: hidden;
    width: 100vw;
    height: 70vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    .slide-info {
        position: absolute;
        z-index: 3;
        width: fit-content;
        max-width: 60vw;
        box-shadow: 0 0 20px black;

        @media (max-width: 800px) {
            max-width: calc(100vw - 20px);
        }

        .slide-title {
            display: flex;

            a {
                text-decoration: none;
                color: var(--white);
            }

            h1 {
                font-size: 30px;
                color: var(--white);
                font-family: "Bebas Neue", sans-serif;
            }
        }

        p {
            font-size: 20px;
            color: var(--white);

            @media (max-width: 800px) {
                font-size: 16px;
            }
        }
    }

    .slide-icons {
        display: flex;
        flex-wrap: wrap;
        width: fit-content;

        .center svg {
            margin-left: 2px;
        }

        .pause-play {
            background-color: var(--primary);
            position: relative;

            svg {
                color: var(--white);
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 30px;
                height: 30px;

                @media (max-width: 800px) {
                    width: 25px;
                    height: 25px;
                }
            }
        }

        .active {
            border-color: var(--accent) !important;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                opacity: 0.4;
                background-color: var(--accent);
                z-index: 7;
                top: 0;
                left: 0;
                animation: slideProgress 5s;
            }

            @keyframes slideProgress {
                0% {
                    width: 0;
                }
                100% {
                    width: 100%;
                }
            }
        }

        .slide {
            transition: all 1s;
            border: 4px var(--primary) solid;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            overflow: hidden;
            margin: 10px 10px 0 0;
            cursor: pointer;

            @media (max-width: 800px) {
                width: 40px;
                height: 40px;
            }

            img {
                object-fit: cover;
                height: 100%;
            }
        }
    }
}
</style>
