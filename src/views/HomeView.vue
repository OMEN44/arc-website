<script setup lang="ts">
import SlideCards from "@/components/homeView/SlideCards.vue";
import SlideShow from "../components/homeView/SlideShow.vue";
</script>

<template>
    <div class="home-view">
        <SlideShow />
        <div class="div-about">
            <div class="div-quote">
                <h2>Fueled by passion, Driven by discovery.</h2>
                <p>
                    In 2023 the QUT Robotics Club constructed our first Lunar Rover, reaching new
                    limits for the club. The team now channels their skills into the rover Perseus,
                    that will be used to compete in the 2025 Australian Rover Callenge
                </p>
                <p>
                    The QUT Robotics Club has been a part of the Australian Rover Challenge since
                    2018. We have competed in the 2018, 2019, and 2021 competitions. In 2023 we won
                    the competition and are now preparing for the 2025 competition. We have also
                    been a part of the NASA Robotic Mining Competition since 2019. We have competed
                    in the 2019, 2020, and 2021 competitions. In 2021 we won the competition and are
                    now preparing for the 2022 competition. We have also been a part of the IEEE
                    Autonomous Robotics Competition since 2019. We have competed in the 2019, 2020,
                    and 2021 competitions. In 2021 we won the competition and are now preparing for
                    the 2022 competition. We have also been a part of the IEEE Autonomous Robotics
                    Competition since 2019. We have competed in the 2019, 2020, and 2021
                    competitions. In 2021 we won the competition and are now preparing for the 2022
                    competition. We have also been a part of the IEEE Autonomous Robotics
                    Competition since 2019. We have competed in the 2019, 2020, and 2021
                    competitions. In 2021 we won the competition and are now preparing for the 2022
                    competition.
                </p>
            </div>
            <div class="video-container">
                <iframe
                    class="video"
                    src="https://www.youtube.com/embed/nWxPPo64xdE"
                    title="QUT Centre for Robotics"
                    frameborder="0"
                    allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </div>
            <div class="success-cards">
                <h2>Our successes</h2>
                <div class="cards">
                    <div class="card">
                        <h3>2023 -</h3>
                        <p>QUTRC wins the Australian Rover Challenge</p>
                    </div>
                    <div class="card">
                        <h3>2021 -</h3>
                        <p>QUTRC wins the NASA Robotic Mining Competition</p>
                    </div>
                    <div class="card">
                        <h3>2019 -</h3>
                        <p>QUTRC wins the IEEE Autonomous Robotics Competition</p>
                    </div>
                </div>
            </div>
        </div>
        <SlideCards />
    </div>
</template>

<style scoped lang="scss">
.home-view {
    overflow-x: hidden;
}

h2 {
    font-size: 35px;
    margin-bottom: 10px;
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        bottom: 10px;
        left: -5px;
        width: calc(100% + 10px);
        height: 10px;
        z-index: -1;
        background-color: var(--accent-alt);
    }
}

.div-about {
    color: var(--white);
    border: 2px var(--accent);
    border-style: solid none;

    .video-container {
        padding: 0 10%;
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary);

        .video {
            width: 100%;
            height: auto;
            border: none;
        }
    }

    .div-quote {
        width: 100%;
        background-color: var(--primary);
        height: fit-content;
        padding: 80px 10% 30px 10%;

        p {
            font-size: 18px;
        }
    }

    .success-cards {
        background-color: var(--primary);
        padding: 30px calc(10% - 10px);

        h2 {
            margin-left: 10px;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;

            .card {
                background-color: var(--secondary);
                padding: 10px;
                margin: 10px;
                border-radius: var(--radius);
                width: calc(50% - 20px);
                display: flex;

                @media (max-width: 800px) {
                    width: calc(100% - 20px);
                }

                h3 {
                    font-size: 24px;
                    text-wrap: nowrap;
                    margin: auto 0;
                }

                p {
                    font-size: 18px;
                    margin: auto 0 auto 8px;
                }
            }
        }
    }
}
</style>
