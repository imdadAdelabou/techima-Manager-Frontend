<template>
  <div class="flex justify-center mt-12 card">
    <img
      src="../assets/imgs/LoginIllustration.png"
      class="resizeGif align-bottom gif"
    />
    <div class="w-1/4 mt-20 mr-32 ml-32 remove__marg">
      <h1 class="font-bold text-2xl mb-4">Connexion</h1>
      {{ errorMessage }}
      <form @submit.prevent="submitForm">
        <BaseInput
          place-holder="Email"
          :class="[state.emailIsValid ? 'mb-4' : 'mb-1']"
          :has-slot="true"
          :content="state.email"
          inputType="email"
          @getInputValue="getEmailValue"
        >
          <EmailIcon />
        </BaseInput>
        <p
          v-if="!state.emailIsEntered"
          class="border border-danker rounded-md p-1 text-xs bg-[#da141499] text-white"
        >
          {{ messages.requiredField }}
        </p>
        <p
          v-if="!state.emailIsValid"
          class="border border-danger rounded-md p-1 text-xs bg-[#da141499] text-white"
        >
          {{ messages.requiredEmail }}
        </p>
        <BaseInput
          class="mt-4"
          place-holder="Mots de passe"
          :has-slot="true"
          inputType="password"
        >
          <LockPasswordIcon />
        </BaseInput>
        <CustomButton
          :btn="btnContent"
          :is-active="true"
          :is-loading="false"
          :disabled="false"
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
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import BaseInput from "../components/BaseInput.vue";
import CustomButton from "../components/CustomButton.vue";
import EmailIcon from "../components/svgs/EmailIcon.vue";
import LockPasswordIcon from "../components/svgs/LockPasswordIcon.vue";
import { useField } from "vee-validate";
import { messages } from "../helpers/constants";
import { stat } from "fs";

export default defineComponent({
  name: "LoginView",
  components: { BaseInput, CustomButton, EmailIcon, LockPasswordIcon },
  setup() {
    const state = reactive({
      email: "",
      emailIsValid: false,
      emailIsEntered: false,
      password: "",
      passwordIsEntered: false,
      formIsValid: false,
    });

    const cEmailIsValid = computed(() => state.emailIsValid);

    const btnContent = {
      label: "Se connecter",
      onClick: () => console.log("Login"),
    };
    const { errorMessage, value } = useField("email", isRequired);

    function getEmailValue(value: string) {
      state.email = value;
      console.log(errorMessage);
      console.log(value);
    }

    function isRequired(content: string) {
      if (content && content.trim()) {
        return true;
      }
      return messages.requiredField;
    }

    function isEmail(content: string) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(content);
    }

    function submitForm() {
      console.log(state.email, "Email");
      console.log(isEmail(state.email));
      if (
        (state.email === null || state.email === "") &&
        state.email.length <= 0
      )
        state.emailIsEntered = false;
      else state.emailIsEntered = true;
      if (!isEmail(state.email)) {
        state.emailIsValid = false;
      } else state.emailIsValid = true;
    }

    return {
      btnContent,
      getEmailValue,
      state,
      errorMessage,
      submitForm,
      cEmailIsValid,
      messages,
    };
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
