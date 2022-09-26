import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
// import { useStore } from 'vuex'
import store from '@/store/index';

const routes = [
  {
    path: "/",
    component: () => import('../views/Main.vue'),
    redirect:'/login',
    children: [
      {
        path:"/home",
        name:'home',
        component: Home
      },
      {
        path: '/user',
        name: 'user',
        component: () => import("../views/user/User.vue")

      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import("../views/Page1.vue")

      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import("../views/Page2.vue")

      },


    ]
  },
  {
    path: '/BarTemplate',
    name: 'BarTemplate',
 
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

router.beforeEach((to, from) => {
    // const store = useStore();
    console.log('route: ', to)

    if (to.path === '/login' &&  store.state.Member.user.isLogin)
        return { name: 'home'}

    if (!store.state.Member.user.isLogin)
        return { name: 'login' }

})

export default router;
