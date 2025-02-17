<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import WelcomeBanner from "@/components/WelcomeBanner.vue";
import {
    faAdd,
    faCalendar,
    faDashboard,
    faDumbbell,
    faPlug,
    faRuler,
    faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
import RoverPoi from "../roverPoi.json";
import RoverStats from "../roverStats.json";

const points = ref<
    Array<{
        roverName: string;
        left: number;
        top: number;
        title: string;
        descrption: string;
    }>
>(RoverPoi);
const stats =
    ref<Array<{ roverName: string; title: string; content: string; icon: number }>>(RoverStats);

const selected = ref<number>(-1);
const selectedRover = ref<string>("perseus");

const icons = ref([faRuler, faDumbbell, faDashboard, faCalendar, faTools, faPlug]);
</script>

<template>
    <div style="overflow-x: hidden">
        <WelcomeBanner
            title="Our Rover"
            description="The Australian Rover Challenge takes place over four days, requiring a robust and capable rover to complete a wide range of tasks. The tasks include anything from driving the rover, to collecting samples, to the rover working fully autonomously."
            image="/rfid.JPG"
            placeholder="/placeholders/rfid-smol.jpg" />
        <div class="about container">
            <h2>Meet Perseus<span>.</span></h2>
            <p>
                The Perseus project represents the QUT Robotics Club's desire to field a
                second-generation rover (Perseus) in the 2024 Australian Rover Challenge and meet or
                exceed the requirements of each task in the Competition. The current design for
                Perseus is a four-wheeled custom manufactured rover with modular sub-systems and an
                architecture which preferences robustness.
            </p>
        </div>
        <div class="rover-container">
            <div class="rover">
                <img src="/perseus-transparent.png" />
                <span
                    class="poi"
                    v-for="(poi, index) in points"
                    :style="{
                        display: poi.roverName === selectedRover ? 'absolute' : 'none',
                        left: poi.left + '%',
                        top: poi.top + '%',
                    }"
                    @click="selected = index">
                    <FontAwesomeIcon :icon="faAdd" />
                </span>
            </div>
        </div>
        <div class="element-desciption container">
            <span v-if="selected === -1">Click on the rover to learn more.</span>
            <template v-else>
                <h2>{{ points[selected].title }}<span>.</span></h2>
                <p>{{ points[selected].descrption }}</p>
            </template>
        </div>
        <div class="rover-stats">
            <h2>Stats<span>.</span></h2>
            <p class="contact">
                If you have any more questions about {{ selectedRover }} please send us a message
                with the form on the team page.
            </p>
            <div class="stats">
                <div class="stat" v-for="stat in stats" v-show="stat.roverName === selectedRover">
                    <FontAwesomeIcon :icon="icons[stat.icon]" />
                    <div>
                        <h3>{{ stat.title }}</h3>
                        <p>{{ stat.content }}</p>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<style scoped lang="scss">
.about {
    margin: 20px var(--text-margin);
    font-size: 20px;
    padding: 20px;

    @media (max-width: 800px) {
        margin: 10px;
    }
}

.rover-container {
    margin: 20px var(--text-margin);

    @media (max-width: 800px) {
        margin: 10px;
    }

    .rover {
        position: relative;
        margin: auto;
        max-width: 900px;

        img {
            width: 100%;
            height: auto;
        }

        .poi {
            position: absolute;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background-color: var(--primary);
            display: flex;
            justify-content: center;
            border: 2px solid var(--accent);
            cursor: pointer;

            @media (max-width: 800px) {
                width: 25px;
                height: 25px;

                svg {
                    width: 15px !important;
                    height: 15px !important;
                }

                &:hover {
                    svg {
                        width: 20px;
                        height: 20px;
                    }
                }
            }

            svg {
                color: var(--accent);
                width: 15px;
                height: 15px;
                margin: auto;
                transition: all 0.3s;
            }

            &:hover {
                svg {
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }
}

.element-desciption {
    margin: 20px var(--text-margin);
    font-size: 20px;
    padding: 20px;

    @media (max-width: 800px) {
        margin: 10px;
    }
}
.rover-stats {
    padding: 40px var(--text-margin) 20px var(--text-margin);
    background: var(--black);
    border: 2px var(--accent);
    border-style: solid none;

    @media (max-width: 800px) {
        padding: 20px var(--text-margin-mobile) 0 var(--text-margin-mobile);
    }

    .stats {
        display: flex;
        flex-wrap: wrap;
        width: fit-content;

        @media (max-width: 800px) {
            margin: auto;

            .stat {
                margin: 20px !important;
            }
        }

        .stat {
            display: flex;
            margin: 30px 60px;

            svg {
                width: 40px;
                height: 40px;
                margin: auto 20px auto 0;
            }
        }
    }

    .contact {
        font-size: 18px;
        margin: 5px 20px;
    }
}
</style>
