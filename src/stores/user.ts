import axios, { AxiosError, AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { BASE_API_URL, messages } from "../helpers/constants";
import { LoginRecord, User } from "../helpers/types";
import { createToast, ToastOptions } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

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
        console.log(result, "result");
      } catch (e: any) {
        if (
          e.response.status == 400 &&
          e.response.data.errors != null &&
          e.response.data.errors[0].property === "password"
        ) {
          createToast(messages.incorrectPassword, dangerToastStyle);
        }
        if (e.response.status == 404) {
          createToast(messages.inexistantUser, dangerToastStyle);
        }
      }
    },

    updateLoginState() {},
  },
});
