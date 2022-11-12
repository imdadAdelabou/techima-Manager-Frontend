import axios, { AxiosError, AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { BASE_API_URL, messages } from "../helpers/constants";
import { LoginRecord, User } from "../helpers/types";
import { createToast, ToastOptions } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";
import router from "../router";

export const dangerToastStyle: ToastOptions | undefined = {
  type: "danger",
  position: "top-center",
};

export const useUserStore = defineStore("user", {
  state: () => ({
    user: <User>{
      firstName: "",
      lastName: "",
      role: "",
      isLogin: false,
    },
  }),
  getters: {
    getUser(state): User {
      return state.user;
    },
  },

  actions: {
    async login(body: LoginRecord) {
      try {
        let result = await axios.post(BASE_API_URL + "/auth/login", body);
        if (result.status == 200 || result.status == 201) {
          console.log(result.data);
          localStorage.setItem("userToken", result.data["token"]);
          router.push("/dashboard");
        }
      } catch (e: any) {
        if (
          e.response.status == 400 &&
          e.response.data.errors != null &&
          e.response.data.errors[0].property === "password"
        ) {
          createToast(messages.incorrectPassword, dangerToastStyle);
        }
        if (e.response.status == 401) {
          createToast(messages.incorrectPassword, dangerToastStyle);
        }
        if (e.response.status == 404) {
          createToast(messages.inexistantUser, dangerToastStyle);
        }
      }
    },

    updateLoginState() {},

    async getDataOfUserConnected() {
      try {
        let userToken: string = localStorage.getItem("userToken") as string;
        let result = await axios.get("/me", {
          headers: { "x-access-token": userToken },
        });
        console.log(result);
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
});
