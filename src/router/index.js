import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: () => import('../views/Main.vue'),
    children: [
      {
        path:"/",
        name:'Home',
        component: Home
      }
    ]
  },
  {
    path: '/BarTemplate',
    name: 'BarTemplate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/BarTemplate.vue'),
  },
  {
    path: '/pending',
    name: 'Pending',
    component: () => import('../views/pending.vue'),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/customerSearch",
    name: "CustomerSearch",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CustomerSearch.vue"),
  },
  {
    path: "/customerConsumption",
    name: "CustomerConsumption",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CustomerConsumption.vue"),
  },
  {
    path: "/report",
    name: "Report",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Report.vue")
  },
  {
    path: "/notes",
    name: "Notes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notes.vue")
  },
  {
    path: '/itemnotes/:id',
    name: "ItemNotes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ItemNotes.vue")
    
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
