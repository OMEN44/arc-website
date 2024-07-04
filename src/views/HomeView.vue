<script setup lang="ts">
import SlideShow from "../components/homeView/SlideShow.vue";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const scroll = () => {
    console.log("eee");
    const aboutDiv: HTMLDivElement = document.getElementsByClassName(
        "div-quote"
    )[0] as HTMLDivElement;
    aboutDiv.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
    <div class="home-view">
        <SlideShow />
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
    <div class="div-see-more"></div>
</template>

<style scoped lang="scss">
.home-view {
    overflow-x: hidden;
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
