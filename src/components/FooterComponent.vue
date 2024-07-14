<script setup lang="ts">
import { faFacebook, faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LogoComponent from "./LogoComponent.vue";
</script>

<template>
    <div class="footer">
        <div class="footer-credits">
            <LogoComponent />
            <p>ABN: 34 411 341 964</p>
            <p>© 2021 QUT Robotics Club</p>
            <p>
                Address: 920 S Block, QUT Gardens Point Campus, 2 George St, Brisbane City QLD 4000
            </p>
            <p>Website by Huon Swales</p>
        </div>
        <div class="footer-content">
            <div class="footer-links">
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
                <RouterLink to="/sponsors">Sponsors</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </div>
            <div class="footer-socials">
                <a href="https://www.facebook.com/QUTRoboticsClub">
                    <FontAwesomeIcon :icon="faInstagram" />
                </a>
                <a href="https://www.facebook.com/QUTRoboticsClub">
                    <FontAwesomeIcon :icon="faFacebook" />
                </a>
                <a href="https://www.facebook.com/QUTRoboticsClub">
                    <FontAwesomeIcon :icon="faTiktok" />
                </a>
                <a href="https://www.facebook.com/QUTRoboticsClub">
                    <FontAwesomeIcon :icon="faLinkedin" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer {
    background-color: var(--black);
    color: var(--white);
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: var(--primary);

    @media (max-width: 800px) {
        flex-direction: column;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        flex: 1;

        a,
        svg {
            color: var(--white);
            text-decoration: none;
            margin: 10px;
            font-size: 20px;
            transition: color 0.3s;

            &:hover {
                color: var(--accent);
            }
        }

        .footer-links {
            display: flex;
            flex-wrap: wrap;
        }
    }

    .footer-credits {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        flex: 1;

        p {
            margin-left: 10px;
        }
    }
}
</style>
