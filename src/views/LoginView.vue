<template>
  <div class="flex justify-center mt-12 card">
    <img
      src="../assets/imgs/LoginIllustration.png"
      class="resizeGif align-bottom gif"
    />

    <div class="w-1/4 mt-20 mr-32 ml-32 remove__marg">
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
      <div class="mt-4 show_sign_btn">
        <h4 class="text-xs font-semibold">
          Nouveau ? Créer un compte en cliquant ici
          <router-link to="/sign-up">
            <span class="font-bold underline text-primary cursor-pointer"
              >s'inscrire
            </span>
          </router-link>
        </h4>
      </div>
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

.show_sign_btn {
  display: none;
}

@media screen and (max-width: 480px) {
  .gif {
    display: none;
  }

  .remove__marg {
    width: 80%;
    margin: 0 !important;
  }

  .card {
    margin-top: 70px;
  }

  .show_sign_btn {
    display: block;
  }
}
</style>
