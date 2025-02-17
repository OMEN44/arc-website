import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/home",
            name: "home",
            component: HomeView,
        },
        {
            path: "/team",
            name: "team",
            // Lazy loading
            component: () => import("../views/TeamView.vue"),
        },
        {
            path: "/rover",
            name: "rover",
            // Lazy loading
            component: () => import("../views/RoverView.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            // Lazy loading
            component: () => import("../views/ContactView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            redirect: { name: "home" },
        },
    ],
});

export default router;
