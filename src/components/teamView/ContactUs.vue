<script setup lang="ts">
import { groups } from "@/scripts/teamList";
import { ref } from "vue";
import emailJs from "emailjs-com";

const contactForm = ref<{ name: string; email: string; role: number; message: string }>({
    name: "",
    email: "",
    role: -1,
    message: "",
});

const serviceID = "service_nwue3ql";
const templateID = "template_ptjo7zq";
const publicKey = "tC_TZYrIVW_yXSAes";

emailJs.init(publicKey);

const sendEmail = (e: Event) => {
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
    <form @submit.prevent="sendEmail" class="container">
        <input type="text" placeholder="Name" v-model="contactForm.name" />
        <input type="email" placeholder="Email" v-model="contactForm.email" />
        <select type="text" placeholder="Role" v-model="contactForm.role">
            <option value="-1">Select a role</option>
            <option v-for="(group, index) in groups" :value="index">
                {{ group.group }}
            </option>
        </select>
        <textarea placeholder="Tell us about yourself" v-model="contactForm.message"></textarea>
        <button type="submit">Submit</button>
    </form>
</template>

<style scoped lang="scss">
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
</style>
