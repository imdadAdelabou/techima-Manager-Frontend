<template>
  <div
    class="w-full p-6 shadow flex justify-between sticky top-0 bg-white z-50 h-[108px]"
  >
    <img src="../assets/logo.png" class="resizeHeight" />
    <div class="flex" v-if="!user.isLogin">
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
          <h2 class="font-bold text-base">Imdad Adelabou</h2>
          <h3 class="font-medium text-[#6D7580]">Gardien</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router";
import CustomButton from "./CustomButton.vue";
import { useUserStore } from "../stores/user";

export default defineComponent({
  name: "AppBar",
  setup() {
    const user = useUserStore().getUser;
    const btnSignUp = {
      label: "Inscription",
      onClick: () => router.push("/sign-up"),
    };
    const btnLogin = { label: "Connexion", onClick: () => router.push("/") };

    return { btnSignUp, btnLogin, user };
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
</style>
