<script setup lang="ts">
import CustomFooter from "@/components/FooterComponent.vue";
import TeamList from "@/components/teamView/TeamList.vue";
import ContactUs from "@/components/teamView/ContactUs.vue";
import VLazyImage from "v-lazy-image";
</script>

<template>
    <div class="team-view">
        <div class="welcome">
            <VLazyImage src="/team.JPG" src-placeholder="/placeholder/team-smol.jpg" />
            <div class="title container">
                <h1>Our Team</h1>
                <p>
                    We're always looking for new members to join our team! We love to learn new
                    skills while supporting each other to grow our knowledge (and it's super fun)!
                    If you're interested please register your interest with the form at the bottom
                    of this page.
                </p>
            </div>
        </div>
        <TeamList />
        <div class="join">
            <h2>Interested in joining?</h2>
            <p>
                If you have an interest in joining our team, please fill out the form below and tell
                us how you think you can help our team.
            </p>
            <ContactUs />
        </div>
        <CustomFooter />
    </div>
</template>

<style scoped lang="scss">
.team-view {
    overflow-x: hidden;

    .welcome {
        width: 100vw;
        height: 80vh;
        border-bottom: 2px solid var(--accent);
        position: relative;
        background-color: var(--black);

        .title {
            position: absolute;
            z-index: 3;
            bottom: 0;
            width: 60%;

            @media (max-width: 800px) {
                width: calc(100% - 20px);
            }

            p {
                font-size: 20px;
            }
        }
    }

    .join {
        width: 100vw;
        padding: 20px var(--text-margin);
        font-size: 20px;

        @media (max-width: 800px) {
            padding: 20px var(--text-margin-mobile);
        }

        div {
            display: flex;
            height: fit-content;

            @media (max-width: 800px) {
                flex-direction: column;

                button {
                    margin: 10px 0 !important;
                }
            }

            button {
                margin: 5px 10px auto 10px;
            }
        }
    }
}
</style>
