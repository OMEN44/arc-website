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
            path: "/about",
            name: "about",
            // Lazy loading
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            redirect: { name: "home" },
        },
    ],
});

export default router;
