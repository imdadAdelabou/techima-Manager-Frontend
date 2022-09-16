import {defineStore} from "pinia"
import { User } from "../helpers/types"

export const useUserStore = defineStore('user', {
    state: () => ({
        user: <User>{
            firstName: "",
            lastName: "",
            role: "",
            isLogin: false
        },
    }),
    getters: {
        getUser(state):User {
            return state.user;
        },
    },

    actions: {

        updateLoginState() {
            
        }
    },
})