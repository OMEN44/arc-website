<script setup lang="ts">
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";
import slidesJSON from "../../../public/slideShow.json";

const playSlideShow = ref<boolean>(true);
const slideShowIndex = ref<number>(0);
let interval: number | undefined = undefined;

const slides = ref<Array<{ path: string; text: string }>>(slidesJSON);

onMounted(() => {
    document.getElementById("slide-show")!.style.backgroundImage = `url(${
        slides.value[slideShowIndex.value].path
    })`;
    interval = setInterval(() => {
        if (playSlideShow.value) {
            slideShowIndex.value = (slideShowIndex.value + 1) % slides.value.length;
            document.getElementById("slide-show")!.style.backgroundImage = `url(${
                slides.value[slideShowIndex.value].path
            })`;
        }
    }, 5000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<template>
    <div id="slide-show" class="slide-show">
        <div class="slide-info">
            <h1>Title<button>See more</button></h1>
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
    height: 80vh;
    background-image: url("/public/image_7.jpg");
    background-size: auto 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    .slide-info {
        background-color: var(--secondary);
        padding: 10px;
        margin: 10px;
        border-radius: var(--radius);
        width: fit-content;
        max-width: 60vw;

        h1 {
            font-size: 30px;
            color: var(--white);
        }

        p {
            font-size: 20px;
            color: var(--white);
        }

        button {
            background-color: var(--accent);
            color: var(--white);
            border: none;
            border-radius: var(--radius);
            padding: 5px 10px;
            margin-top: 10px;
            cursor: pointer;
            transition: transform 0.5s;
            margin-left: 10px;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .slide-icons {
        display: flex;
        flex-wrap: wrap;
        width: fit-content;
        // background-color: var(--secondary);
        // border-radius: var(--radius);
        // margin: 10px;
        // padding-left: 10px;

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
            // margin: 10px 10px 10px 0;

            img {
                object-fit: cover;
                height: 100%;
            }
        }
    }
}
</style>
