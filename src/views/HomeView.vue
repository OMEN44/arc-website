<script setup lang="ts">
import { faArrowDown, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onBeforeUnmount, onMounted, ref } from "vue";

const playSlideShow = ref<boolean>(true);
const slideShowIndex = ref<number>(0);
let interval: number | undefined = undefined;

const slides = ref<Array<{ path: string; text: string }>>([
    {
        path: "/image_1.jpg",
        text: "The rover is having fun in a make shift sandpit",
    },
    { path: "/image_2.jpg", text: "Let free on an alien land scape" },
    { path: "/image_3.jpg", text: "Perseus has a play date with his buddies" },
    { path: "/image_4.jpg", text: "Hi Aidan" },
    { path: "/image_5.jpg", text: "The team inspect the rover" },
    { path: "/image_6.jpg", text: "Deploy little friend" },
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
            <p v-text="slides[slideShowIndex].text" class="image-text"></p>
            <div class="div-slide-icons">
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
    </div>
    <div class="div-scroll" @click.prevent="scroll">
        <FontAwesomeIcon class="icon" :icon="faArrowDown" />
        <p>Explore with us</p>
        <FontAwesomeIcon class="icon" :icon="faArrowDown" />
    </div>
    <div class="div-about">
        <div class="div-about-content">
            <div class="div-quote">
                <h2>Fueled by passion, Driven by discovery.</h2>
                <p>
                    In 2023 the QUT Robotics Club constructed our first Lunar Rover, reaching new
                    limits for the club. The team now channels their skills into the rover Perseus,
                    that will be used to compete in the 2025 Australian Rover Callenge
                </p>
                <button>Join our mission</button>
            </div>
            <div class="div-options">
                <div class="card">
                    <h2></h2>
                </div>
            </div>
        </div>
    </div>
    <div class="div-see-more">
        
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
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 20px;
        left: 20px;
        bottom: 20px;
        z-index: 6;

        .image-text {
            padding: 10px;
            color: var(--white);
            font-size: 22px;
            margin: auto auto auto 30px;
            text-align: left;
        }

        .div-slide-icons {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
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

.div-about {
    margin: 250px 0;
    color: var(--white);

    .div-about-content {
        .div-quote {
            width: 100%;
            background-color: var(--primary);
            height: fit-content;
            padding: 30px 10%;

            h2 {
                font-size: 28px;
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
            }
        }

        .div-options {
            width: 100%;
            background-color: var(--secondary);
            padding: 30px 10%;
        }
    }
}
</style>
