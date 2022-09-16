<template>
  <div class="flex justify-center items-center mt-12">
    <div>
      <img :src="loginIcon" alt="SignUpIcon" class="resizeGif" />
    </div>
    <div class="card mt-6">
      <div class="flex mb-4">
        <BaseInput placeHolder="Nom" class="w-2/3 mr-4"></BaseInput>
        <BaseInput placeHolder="Prénom" class="w-2/3"></BaseInput>
      </div>
      <BaseInput placeHolder="Email"></BaseInput>
      <div class="flex mt-4">
        <BaseInput placeHolder="Mot de passe" class="w-2/3 mr-4"></BaseInput>
        <BaseInput
          placeHolder="Confirmer mot de passe"
          class="w-2/3"
        ></BaseInput>
      </div>

      <DropDown class="mt-4" @choice="getChoiceRole"></DropDown>
      <BaseInput
        v-if="roleUser.key != 'user'"
        placeHolder="code de création de compte"
        class="mt-4"
        inputType="number"
      >
      </BaseInput>
      <CustomButton
        :btn="btnActive"
        :isActive="true"
        class="mt-6"
      ></CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseInput from "../components/BaseInput.vue";
import CustomButton from "../components/CustomButton.vue";
import loginIcon from "../assets/imgs/login.png";
import DropDown from "../components/DropDown.vue";
import { RoleType } from "../helpers/types";
import router from "../router";
import { roles } from "../helpers/constants";

export default defineComponent({
  name: "SignUpView",
  components: {
    BaseInput,
    CustomButton,
    DropDown,
  },
  setup() {
    const roleUser = ref(roles[0] as RoleType);
    const btnActive = {
      label: "S'inscrire",
      onClick: () => router.push("/verification-email"),
    };

    function getChoiceRole(role: RoleType) {
      roleUser.value = role;
    }

    return { btnActive, loginIcon, roleUser, getChoiceRole };
  },
});
</script>

<style scoped>
.card {
  width: 33%;
}

.resizeGif {
  height: 500px;
}
</style>
