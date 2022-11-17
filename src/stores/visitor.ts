import { defineStore } from "pinia";
import { inject } from "vue";
import { BASE_API_URL } from "../helpers/constants";
import axios from "axios";
import { Visitor } from "../helpers/types";

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

    async addVisitor(data: Visitor) {
      try {
        const result = await axios.post(
          BASE_API_URL + "/visitor/create-visitor",
          data
        );
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
