import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
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
                name: 'User',
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
        meta: { requiresAuth: true }
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

/* 全部情況：
 * 一、login 畫面已 verify                   (重導向到 home)
 * 二、login 畫面未 verify                   (放行)
 * 三、需要 verify 的非 login 畫面未 verify   (重導向到 login)
 * 四、需要 verify 的非 login 畫面已 verify   (放行)
 * 五、不需要 verify 的非 login 畫面未 verify (放行)
 * 六、不需要 verify 的非 login 畫面已 verify (放行)
*/ 
router.beforeEach(async (to, from) => {
    var verify = true;

    console.log("route to: ", to.fullPath);

    // 判斷是否需要 verify
    if (to.meta.requiresAuth){
        verify = await store.dispatch('member/isLogin')
        console.log("verify: ", verify);
    }
    // 需要 verify 的非 login 畫面未 verify
    if (!verify && to.name!=="Login"){
        console.log("not verify ");
        return { name: 'Login' };
    } 
    // login 畫面已 verify 
    if (verify && to.name==="Login") {
        return { name: 'Home' };
    }
})


export default router;
