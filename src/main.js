import { createApp } from "vue";
import App from "./App.vue";
// import App from "./views/Main.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue/es'
// import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/dist/antd.less'


createApp(App).use(Antd).use(store).use(router).mount("#app");
