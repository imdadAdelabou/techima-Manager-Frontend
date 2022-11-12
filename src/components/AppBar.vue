<template>
  <div
    class="w-full p-6 shadow flex justify-between sticky top-0 bg-white z-50 p__mobile"
  >
    <img src="../assets/logo.png" class="resizeHeight" />
    <div class="flex hidden__btn" v-if="!userComputed.isLogin">
      <CustomButton
        :btn="btnLogin"
        :is-active="false"
        style="width: 198px"
        class="mr-6"
      ></CustomButton>
      <CustomButton
        :btn="btnSignUp"
        :is-active="true"
        style="width: 198px"
      ></CustomButton>
    </div>
    <div v-else>
      <div class="flex">
        <div class="w-16 h-16 rounded-full bg-primary flex items-center">
          <div class="w-14 h-14 rounded-full bg-white m-auto"></div>
        </div>
        <div class="ml-3">
          <h2 class="font-bold text-base">{{ connectedUserName() }}</h2>
          <h3 class="font-medium text-[#6D7580]">
            {{ returnLabelRol(userComputed.role) }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import router from "../router";
import CustomButton from "./CustomButton.vue";
import { useUserStore } from "../stores/user";
import { User } from "../helpers/types";
import { returnLabelRol } from "../helpers/constants";

export default defineComponent({
  name: "AppBar",
  setup() {
    const userStore = useUserStore();

    const userComputed = computed((): User => userStore.$state.user);

    const btnSignUp = {
      label: "Inscription",
      onClick: () => router.push("/sign-up"),
    };
    const btnLogin = { label: "Connexion", onClick: () => router.push("/") };

    function connectedUserName() {
      return (
        userComputed.value.lastName[0].toUpperCase() +
        userComputed.value.lastName.slice(1) +
        " " +
        userComputed.value.firstName[0].toUpperCase() +
        userComputed.value.firstName.slice(1)
      );
    }

    return {
      btnSignUp,
      btnLogin,
      connectedUserName,
      userComputed,
      returnLabelRol,
    };
  },
  components: { CustomButton },
});
</script>

<style scoped>
.resizeHeight {
  height: 60px;
}

.shadow {
  box-shadow: -1px 2px 6px 4px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: -1px 2px 6px 4px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 2px 6px 4px rgba(0, 0, 0, 0.15);
}

@media screen and (max-width: 480px) {
  body {
    background-color: red;
  }

  .hidden__btn {
    display: none;
  }

  .resizeHeight {
    height: 45px;
  }

  .p__mobile {
    padding: 20px;
  }
}
</style>
