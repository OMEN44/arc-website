<script setup lang="ts">
import { faArrowDown, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";

const playSlideShow = ref<boolean>(true);
const slideShowIndex = ref<number>(0);
let interval: number | undefined = undefined;

const slides = ref<Array<{ path: string; text: string }>>([
    { path: "/image_1.jpg", text: "Quote about the image" },
    { path: "/image_2.jpg", text: "Quote about the image" },
    { path: "/image_3.jpg", text: "Quote about the image" },
    { path: "/image_4.jpg", text: "Quote about the image" },
    { path: "/image_5.jpg", text: "Quote about the image" },
    { path: "/image_6.jpg", text: "Quote about the image" },
]);

onMounted(() => {
    interval = setInterval(() => {
        if (playSlideShow.value)
            slideShowIndex.value = (slideShowIndex.value + 1) % slides.value.length;
    }, 5000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});

const scroll = () => {
    console.log("eee");
    const aboutDiv: HTMLDivElement = document.getElementsByClassName(
        "div-quote"
    )[0] as HTMLDivElement;
    aboutDiv.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
    <div class="div-slide-show">
        <img :src="slides[slideShowIndex].path" />
        <h1>QUTRC Rover</h1>
        <div class="div-slides">
            <span class="slide pause-play" @click="playSlideShow = !playSlideShow">
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
    <div class="div-scroll" @click.prevent="scroll">
        <FontAwesomeIcon class="icon" :icon="faArrowDown" />
        <p>Explore with us</p>
        <FontAwesomeIcon class="icon" :icon="faArrowDown" />
    </div>
    <div class="div-quote">
        <h2>QUote thingo</h2>
        <p>Short paragraph</p>
        <button>Join our mission</button>
    </div>
</template>

<style scoped lang="scss">
.div-slide-show {
    width: 100vw;
    height: calc(100vh - 50px);
    border-bottom: var(--accent) solid 1px;
    position: relative;
    z-index: 0;
    overflow: hidden;

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
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h1 {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);
        z-index: 5;
        font-size: 40px;
        text-align: center;
        width: 100%;
    }

    .div-slides {
        position: absolute;
        right: 20px;
        bottom: 20px;
        display: flex;
        z-index: 6;
        flex-wrap: wrap;
        width: fit-content;
        justify-content: right;

        .pause-play {
            background-color: var(--black);
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
            border: 2px var(--black) solid;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            overflow: hidden;
            margin: 10px 5px 0 5px;

            img {
                object-fit: cover;
                height: 100%;
            }
        }
    }
}

.div-scroll {
    position: absolute;
    bottom: 5px;
    font-size: 20px;
    left: 50%;
    transform: translate(-50%);
    color: var(--white);
    display: flex;
    width: fit-content;
    justify-content: space-between;
    cursor: pointer;

    @media (max-width: 600px) {
        width: 90%;
    }

    .icon {
        margin: 5px 10px 0 10px;
    }
}

.div-quote {
    height: 100vh;
    margin-top: 50px;
}
</style>
