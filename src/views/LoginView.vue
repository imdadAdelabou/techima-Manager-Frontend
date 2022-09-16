<template>
  <div class="flex justify-center mt-12">
    <img
      src="../assets/imgs/LoginIllustration.png"
      class="resizeGif align-bottom"
    />

    <div class="w-1/4 mt-20 mr-32 ml-32">
      <h1 class="font-bold text-2xl mb-4">Connexion</h1>
      <BaseInput
        place-holder="Email"
        class="mb-4"
        :has-slot="true"
        inputType="email"
      >
        <EmailIcon />
      </BaseInput>
      <BaseInput
        place-holder="Mots de passe"
        :has-slot="true"
        inputType="password"
      >
        <LockPasswordIcon />
      </BaseInput>
      <CustomButton
        :btn="btnContent"
        :is-active="true"
        class="mt-6"
      ></CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "../components/BaseInput.vue";
import CustomButton from "../components/CustomButton.vue";
import EmailIcon from "../components/svgs/EmailIcon.vue";
import LockPasswordIcon from "../components/svgs/LockPasswordIcon.vue";

export default defineComponent({
  name: "LoginView",
  components: { BaseInput, CustomButton, EmailIcon, LockPasswordIcon },
  setup() {
    const btnContent = {
      label: "Se connecter",
      onClick: () => console.log("Login"),
    };

    return { btnContent };
  },
});
</script>

<style scoped>
.resizeGif {
  height: 500px;
  place-self: end;
}
</style>
