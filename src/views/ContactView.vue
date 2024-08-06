<script setup lang="ts">
import ContactUs from "@/components/teamView/ContactUs.vue";
</script>

<template>
    <div>
        <div class="contact-us-message">
            <h2>Contact us!</h2>
            <p>
                If you're interested in joining our team or have questions about what we do, use the
                form below to get in touch! To see more about the team and see where you can help,
                have a look our Team Page, and if you have questions about the rover, check out the Rover
                Page.
            </p>
        </div>
        <ContactUs />
    </div>
</template>

<style scoped lang="scss">
div {
}
.contact-us-message {
    margin: 20px var(--text-margin);
}
</style>
