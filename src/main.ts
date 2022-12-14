import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.mount("#app");
