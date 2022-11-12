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
      userToken: "",
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

          let resultData = await this.getDataOfUserConnected();
          if (resultData == false) {
            createToast(messages.errorOccurs, dangerToastStyle);
            return;
          }
          this.user = resultData as User;
          console.log(this.user);
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

    updateUserState(user: User) {
      this.user = user;
    },

    async getDataOfUserConnected(): Promise<Boolean | User> {
      try {
        let userToken: string = localStorage.getItem("userToken") as string;
        let result = await axios.get(BASE_API_URL + `/me?token=${userToken}`);
        let data = result.data.data.user;

        return {
          id: data["id"],
          isActive: data["isActive"],
          userToken: userToken,
          firstName: data["firstName"],
          lastName: data["lastName"],
          isLogin: userToken != null && userToken != "",
          role: data["role"],
        };
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
});
