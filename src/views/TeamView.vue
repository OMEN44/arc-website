<script setup lang="ts">
import CustomFooter from "@/components/FooterComponent.vue";
import TeamList from "@/components/teamView/TeamList.vue";
import { groups } from "@/scripts/teamList";
</script>

<template>
    <div class="team-view">
        <div class="welcome">
            <img src="/image_4.jpg" />
            <div class="title container">
                <h1>Our Team</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo voluptas
                    alias molestiae animi officia maiores amet similique quidem, maxime deserunt
                    aspernatur ipsam dolore officiis quaerat adipisci itaque impedit quas!
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
            <form @submit.prevent class="container">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <select type="text" placeholder="Role">
                    <option value="-1">Select a role</option>
                    <option v-for="(group, index) in groups" :value="index">
                        {{ group.group }}
                    </option>
                </select>
                <textarea placeholder="Tell us about yourself"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        <CustomFooter />
    </div>
</template>

<style scoped lang="scss">
.team-view {
    overflow-x: hidden;

    .welcome {
        width: 100vw;
        height: 70vh;
        border-bottom: 2px solid var(--accent);
        position: relative;
        background-color: var(--black);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            opacity: 0.5;
        }

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

    form {
        display: flex;
        flex-direction: column;
        margin: 30px auto 0 auto;
        width: 400px;
        padding: 10px 5px;

        button {
            margin: 10px auto;
        }

        textarea {
            max-width: 370px;
        }
    }
}
</style>
