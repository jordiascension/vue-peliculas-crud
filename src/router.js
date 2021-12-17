import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/peliculas",
    name: "peliculas",
    component: () => import("./components/PeliculasList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddPelicula")
  },
  {
    path: "/update/:id",
    name: "update",
    component: () => import("./components/UpdatePelicula")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;