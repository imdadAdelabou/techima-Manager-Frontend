import {createWebHistory, createRouter} from "vue-router"
import LoginViewVue from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import CodeVerification from "../views/CodeVerification.vue";
import DashboardView from "../views/dashboard/dashboard.vue";

const routes = [
    {path: "/", name: "Login", component: LoginViewVue},
    {path: "/sign-up", name: "SignUp", component: SignUpView},
    {path: "/verification-email", name: "CodeVerification", component: CodeVerification},
    {path: "/dashboard", name: "DashboardView", component: DashboardView},
];

const router = createRouter({
    history: createWebHistory(), 
    routes
});

export default router;