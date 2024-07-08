<script setup lang="ts">
import SlideCards from "@/components/homeView/SlideCards.vue";
import SlideShow from "../components/homeView/SlideShow.vue";
</script>

<template>
    <div class="home-view">
        <SlideShow />
        <div class="div-about">
            <div class="div-quote">
                <h2>Fueled by passion, Driven by discovery<span>.</span></h2>
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
                <div class="video-frame">
                    <iframe
                        class="video"
                        src="https://www.youtube.com/embed/nWxPPo64xdE"
                        title="QUT Centre for Robotics"
                        frameborder="0"
                        allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div class="success-cards">
                <h2>Our successes<span>.</span></h2>
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

.div-about {
    color: var(--white);
    border: 2px var(--accent);
    border-style: solid none;
    padding: 0 var(--text-margin);

    @media (max-width: 800px) {
        padding: 0 var(--text-margin-mobile) !important;
    }

    .video-container {
        margin: 0 10%;

        @media (max-width: 800px) {
            margin: 0;
        }

        .video-frame {
            padding: 56% 0 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--primary);
            position: relative;

            .video {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;

                border-radius: var(--radius);
            }
        }
    }

    .div-quote {
        padding: 80px 0 30px 0;

        p {
            font-size: 18px;
        }
    }

    .success-cards {
        padding: 30px 0;

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
