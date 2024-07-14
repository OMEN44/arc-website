<script setup lang="ts">
import SlideCards from "@/components/homeView/SlideCards.vue";
import SlideShow from "../components/homeView/SlideShow.vue";
import CustomFooter from "@/components/FooterComponent.vue";
</script>

<template>
    <div class="home-view">
        <SlideShow />
        <div class="div-about">
            <div class="div-quote">
                <h2>Our journey so far...</h2>
                <p>
                    In 2022 the QUT Robotics Club set the goal of competing in the Australian Rover
                    Challenge hosted by the University of Adelaide across all four categories:
                    Robotic manipulation, in-situ resource utilisation, offworld geology and
                    autonomous operation.
                    <br />
                    In 2023 we competed with our first rover, a 6 wheeled 50kg rocker bogie design
                    called Artemis. Excitedly we placed fourth in the competition.
                    <br />
                    For the 2024 competition we decided to redesign the entire rover based on our
                    2023 experience. In 2024 we competed with our 4 wheeled, 40kg modular rover
                    called Perseus. Again we competed in all four events and placed fourth in the
                    now ever expanding competition.
                    <br />
                    With the QUT Robotics Club's 15 year tradition of learning and sharing we have
                    demonstrated both Artemis and Perseus at various Open Days, school events,
                    robotic competitions and CSIRO showcases.
                    <br />
                    We are thankful to our main supporters, the QUT Faculty of Electrical
                    Engineering and Robotics and the Queensland Center for Robotics.
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
                <h2>Our Successes<span>.</span></h2>
                <div class="cards">
                    <div class="card container">
                        <h3>2023 -</h3>
                        <p>
                            First competition in the Australia Rover Challenge. Placed fourth
                            overall.
                        </p>
                    </div>
                    <div class="card container">
                        <h3>2024 -</h3>
                        <p>
                            Fourth place in the Australian Rover Challenge with newly build Perseus
                            rover.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <SlideCards />
        <CustomFooter />
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
