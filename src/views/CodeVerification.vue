<template>
  <div class="relative">
    <div class="m-0 absolute align w-full">
      <h1 class="text-center m-auto text-4xl font-bold gdr">
        Veuillez vérifier votre boîte mail
      </h1>
      <p class="w-2/4 text-center m-auto mt-2">
        Un code de vérification à 06 chiffres vous a été envoyé à votre adresse
        imdadadelabou0@gmail.com. Entrez le code pour vérifiez votre adresse
        mail et validez la création de votre compte.
      </p>

      <div class="flex justify-center mt-6">
        <input
          class="customInput mr-4"
          type="text"
          pattern="\d*"
          maxlength="1"
        />
        <input class="customInput mr-4" type="number" max="1" />
        <input class="customInput mr-4" type="number" max="1" />
        <input class="customInput mr-4" type="number" max="1" />
        <input class="customInput mr-4" type="number" max="1" />
        <input class="customInput" type="number" max="1" />
      </div>

      <CustomButton
        :isActive="true"
        :btn="btnContent"
        class="mt-6 w-1/4 m-auto"
      ></CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "../components/CustomButton.vue";
import router from "../router";
import { useUserStore } from "../stores/user";

export default defineComponent({
  name: "CodeVerification",
  components: {
    CustomButton,
  },
  props: {},
  setup() {
    const user = useUserStore();

    const btnContent = {
      label: "Valider",
      onClick: () => {
        user.$state.user.isLogin = true;
        router.push("/dashboard");
      },
    };

    return { btnContent };
  },
});
</script>

<style scoped>
.gdr {
  background: -webkit-linear-gradient(#054d97, #8f381a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.customInput {
  width: 70px;
  height: 70px;
  text-align: center;
  border: 1px solid #e2e8ec;
  border-radius: 8px;
}

.align {
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
