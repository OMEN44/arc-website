<script setup lang="ts">
import CustomFooter from "@/components/FooterComponent.vue";
import TeamList from "@/components/teamView/TeamList.vue";
import { groups } from "@/scripts/teamList";
import { ref } from "vue";
import emailJs from "emailjs-com";

const contactForm = ref<{ name: string; email: string; role: number; message: string }>({
    name: "",
    email: "",
    role: -1,
    message: "",
});

const serviceID = "default_service";
const templateID = "template_ptjo7zq";
const publicKey = "tC_TZYrIVW_yXSAes";

emailJs.init(publicKey);

const sendEmail = (e: Event) => {
    console.log(
        contactForm.value.name,
        contactForm.value.email,
        groups.value[contactForm.value.role].group,
        contactForm.value.message
    );
    console.log(e.target);

    try {
        emailJs.send(serviceID, templateID, {
            name: contactForm.value.name,
            email: contactForm.value.email,
            message: `${contactForm.value.name} is interested in the ${
                groups.value[contactForm.value.role].group
            } team. \n\n${contactForm.value.message}`,
        });
    } catch (error) {
        console.log({ error });
    }
    // Reset form field
    contactForm.value.name = "";
    contactForm.value.email = "";
    contactForm.value.message = "";
    contactForm.value.role = -1;
};
</script>

<template>
    <div class="team-view">
        <div class="welcome">
            <img src="/image_4.jpg" />
            <div class="title container">
                <h1>Our Team</h1>
                <p>
                    We are always looking for new members to join our team. We have fun doing
                    amazing things and supporting each other to learn new skills and grow our
                    knowledge. If you are interest please register your interest with the form at
                    the bottom of this page.
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
            <form @submit.prevent="sendEmail" class="container">
                <input type="text" placeholder="Name" v-model="contactForm.name" />
                <input type="email" placeholder="Email" v-model="contactForm.email" />
                <select type="text" placeholder="Role" v-model="contactForm.role">
                    <option value="-1">Select a role</option>
                    <option v-for="(group, index) in groups" :value="index">
                        {{ group.group }}
                    </option>
                </select>
                <textarea
                    placeholder="Tell us about yourself"
                    v-model="contactForm.message"></textarea>
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

        @media (max-width: 800px) {
            width: 100%;

            textarea {
                width: calc(100% - 20px);
                resize: vertical;
            }
        }

        button {
            margin: 10px auto;
        }

        textarea {
            max-width: 370px;
        }
    }
}
</style>
