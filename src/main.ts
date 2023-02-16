import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import initPermission from './router' // 引入路由
import App from "./App.vue";


const pinia = createPinia();

// 初始化路由拦截
initPermission();

export function createApp() {
    const app = createSSRApp(App)
		app.use(pinia)
    return {
        app,
    };
}
