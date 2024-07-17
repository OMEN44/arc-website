<script setup lang="ts">
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CardData from "../../slideCards.json";
import { ref } from "vue";

const cards =
    ref<Array<{ title: string; description: string; route: string | null; image: string }>>(
        CardData
    );

const progressDot = ref<HTMLElement | null>(null);
const cardContainer = ref<HTMLDivElement | null>(null);

const onScroll = (e: Event) => {
    let percent =
        (e.target as HTMLDivElement).scrollLeft /
        ((e.target as HTMLDivElement).scrollWidth -
            ((e.target as HTMLDivElement).parentElement as HTMLDivElement).scrollWidth);

    if (percent > 1) percent = 1;
    progressDot.value!.style.left = `calc(28px * ${Math.round(
        (percent * 100) / (100 / (cards.value.length - 1))
    )})`;
};

const scroll = (direction: "left" | "right") => {
    const cardWidth = Math.round(
        (cardContainer.value!.scrollWidth - cardContainer.value!.parentElement!.scrollWidth) *
            (1 / (cards.value.length - 1))
    );
    const scrollAdjustment = cardContainer.value!.scrollLeft % cardWidth;

    cardContainer.value!.scrollBy({
        left: cardWidth * (direction === "left" ? -1 : 1) - scrollAdjustment,
        behavior: "smooth",
    });
};
</script>

<template>
    <div class="slide-cards-container">
        <FontAwesomeIcon :icon="faChevronCircleLeft" class="arrow left" @click="scroll('left')" />
        <div ref="cardContainer" class="cards" @scroll="onScroll">
            <div class="card" v-for="card in cards">
                <div class="second">
                    <h2>{{ card.title }}<span>.</span></h2>
                    <p>{{ card.description }}</p>
                </div>
                <div class="first">
                    <img :src="card.image" />
                    <button v-if="card.route !== null">
                        <RouterLink :to="card.route!">See more</RouterLink>
                    </button>
                </div>
            </div>
        </div>
        <FontAwesomeIcon
            :icon="faChevronCircleRight"
            class="arrow right"
            @click="scroll('right')" />
        <div class="progress-bar">
            <span ref="progressDot"></span>
            <div v-for="_ in cards.length"></div>
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
            display: none;
            // font-size: 30px;

            // &.left {
            //     left: 10px !important;
            // }

            // &.right {
            //     right: 10px !important;
            // }
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

        @media (max-width: 800px) {
            padding: 20px 40px;
        }

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
                height: 80vh;
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

                a {
                    text-decoration: none;
                    color: var(--white);
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
