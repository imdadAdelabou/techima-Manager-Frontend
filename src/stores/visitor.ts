import { defineStore } from "pinia";
import { inject } from "vue";
import { BASE_API_URL, messages } from "../helpers/constants";
import axios from "axios";
import { Visitor } from "../helpers/types";
import { dangerToastStyle, useUserStore } from "./user";
import { createToast } from "mosha-vue-toastify";

export const useVisitorStore = defineStore("visitor", {
  state: () => ({}),
  getters: {},

  actions: {
    async getAllVisitors(): Promise<Visitor[] | []> {
      const visitors: Visitor[] = [] as Visitor[];

      try {
        console.log(BASE_API_URL + "/visitor/visitors");
        const token = localStorage.getItem("userToken");
        const result = await axios.get(
          BASE_API_URL + "/visitor/visitors?token=" + token
        );
        result.data.data.map((visitor: any) =>
          visitors.push({
            firstName: visitor.firstName,
            lastName: visitor.lastName,
            phoneNumber: visitor.phoneNumber,
            createdDate: "",
            email: visitor.email,
            status: visitor.observation,
          })
        );
        console.log(result);
        console.log(visitors, "<==== visitors");
        return visitors;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    async addVisitor(data: Visitor): Promise<boolean> {
      try {
        const token = useUserStore().getUser.userToken;
        const result = await axios.post(
          BASE_API_URL + "/visitor/create-visitor?token=" + token,
          data
        );
        return true;
      } catch (e: any) {
        if (e.response.status == 403) {
          createToast(messages.requiredAuthorisation, dangerToastStyle);
        }
        if (e.response.status == 500) {
          createToast(messages.errorOccurs, dangerToastStyle);
        }

        return false;
      }
    },
  },
});
