import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
// import { useStore } from 'vuex'
import store from '@/store/index';

const routes = [
    {
        path: "/",
        component: () => import('../views/Main.vue'),
        redirect: '/login',
        children: [
            {
                path: "/home",
                name: 'Home',
                component: Home,
                meta: { requiresAuth: true }
            },
            {
                path: '/user',
                name: 'user',
                component: () => import("../views/user/User.vue"),
                meta: { requiresAuth: true }
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
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue"),
        meta: { requiresAuth: false }
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from) => {
    var verify = true;

    console.log('route to : ', to.fullPath);
    console.log('need auth: ',to.meta.requiresAuth);
    if (to.meta.requiresAuth){
        verify = await store.dispatch('Member/isLogin')
        console.log('return auth: ', verify)
    }
    console.log(verify);
    if (!verify)
        return { name: 'Login' };

    console.log("done");
})


export default router;
