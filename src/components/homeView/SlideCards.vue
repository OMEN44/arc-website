<script setup lang="ts">
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

const progressDot = ref<HTMLElement | null>(null);

const onScroll = (e: Event) => {
    let percent =
        (e.target as HTMLDivElement).scrollLeft /
        ((e.target as HTMLDivElement).scrollWidth -
            ((e.target as HTMLDivElement).parentElement as HTMLDivElement).scrollWidth);

    if (percent > 1) percent = 1;
    progressDot.value!.style.left = `calc(28px * ${Math.round((percent * 100) / (100 / 2))})`;
};
</script>

<template>
    <div class="slide-cards-container">
        <FontAwesomeIcon :icon="faChevronCircleLeft" class="arrow left" />
        <div class="cards" @scroll="onScroll">
            <div class="card" v-for="i in 3">
                <div class="second">
                    <h2>Title<span>.</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </div>
                <div class="first">
                    <img :src="`/image_${i + 1}.jpg`" />
                    <button>See more</button>
                </div>
            </div>
        </div>
        <FontAwesomeIcon :icon="faChevronCircleRight" class="arrow right" />
        <div class="progress-bar">
            <span ref="progressDot"></span>
            <div v-for="_ in 3"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.slide-cards-container {
    background-color: var(--black);
    height: 80vh;
    position: relative;
    border-bottom: 2px var(--accent) solid;

    @media (max-width: 800px) {
        height: 90vh;
    }

    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 40px;
        color: var(--accent);
        cursor: pointer;
        z-index: 1;

        background-color: var(--secondary);
        padding: 10px;
        border-radius: 50%;

        @media (max-width: 800px) {
            font-size: 30px;

            &.left {
                left: 10px !important;
            }

            &.right {
                right: 10px !important;
            }
        }

        &.left {
            left: 20px;
        }

        &.right {
            right: 20px;
        }
    }

    .cards {
        padding: 10vh var(--text-margin);
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }

        .card {
            flex: 0 0 auto;
            &:first-child {
                margin-left: 0;
            }

            background-color: var(--primary);
            width: 100%;
            margin-left: 60px;
            border-radius: var(--radius);
            overflow: hidden;
            color: var(--white);
            height: 60vh;

            @media (max-width: 800px) {
                margin-left: 20px;
                height: 70vh;
            }

            .first {
                height: 100%;
                width: 50%;
                float: left;
                position: relative;

                @media (max-width: 800px) {
                    width: 100%;
                    height: 30%;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                button {
                    position: absolute;
                    bottom: 20px;
                    right: 50%;
                    transform: translateX(50%);
                }
            }

            .second {
                padding: 30px;
                width: 50%;
                height: 100%;
                float: right;

                @media (max-width: 800px) {
                    width: 100%;
                    height: 70%;
                    padding: 20px;

                    h2 {
                        font-size: 28px !important;
                    }
                }

                p {
                    font-size: 20px;

                    @media (max-width: 800px) {
                        font-size: 17px;
                    }
                }
            }
        }
    }

    .progress-bar {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--secondary);
        height: 28px;
        border-radius: 14px;
        display: flex;

        div {
            width: 16px;
            height: 16px;
            margin: 6px;
            background-color: var(--primary);
            border-radius: 50%;
        }

        span {
            position: absolute;
            width: 20px;
            height: 20px;
            margin: 4px;
            background-color: var(--accent);
            border-radius: 50%;
            transition: all 0.2s;
        }
    }
}
</style>
