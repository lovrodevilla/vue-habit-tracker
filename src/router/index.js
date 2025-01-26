import { createRouter, createWebHistory } from "vue-router";

// Define routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"), // No store logic in the router
  },
  {
    path: "/add",
    name: "Add", // Add name for the Add route
    component: () => import("../views/AddHabitView.vue"),
  },
  {
    path: "/stats",
    name: "Stats", // Add name for Stats route
    component: () => import("../views/StatsView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound", // Name for NotFound route
    component: () => import("../views/NotFoundView.vue"),
    meta: { hideNav: true },
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
