<template>
  <div class="flex">
    <BaseInput
      placeHolder="Nom"
      class="w-full"
      @getInputValue="(value) => (state.firstName = value)"
    >
    </BaseInput>
    <BaseInput
      placeHolder="Prénom"
      class="w-full ml-4"
      @getInputValue="(value) => (state.lastName = value)"
    >
    </BaseInput>
  </div>
  <BaseInput
    place-holder="Numéro de téléphone"
    class="mt-4"
    inputType="number"
    @getInputValue="(value) => (state.phoneNumber = value)"
  >
  </BaseInput>
  <BaseInput
    place-holder="Email"
    class="mt-4"
    inputType="email"
    @getInputValue="(value) => (state.email = value)"
  ></BaseInput>
  <BaseInput
    place-holder="Observation"
    class="mt-4"
    @getInputValue="(value) => (state.observation = value)"
  ></BaseInput>
  <div class="mt-6 flex">
    <CustomButton
      :btn="btnAdd"
      :is-active="true"
      class="w-full"
      @click="onSubmit()"
      :is-loading="state.submitIsLoading"
    >
    </CustomButton>
    <CustomButton :btn="btnCancel" :is-active="false" class="w-full ml-4">
    </CustomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ContentBtn, StatItem } from "../../helpers/types";
import BaseInput from "../BaseInput.vue";
import CustomButton from "../CustomButton.vue";
import { useVisitorStore } from "../../stores/visitor";

export default defineComponent({
  name: "AddAVisitor",
  components: { BaseInput, CustomButton },
  emits: ["cancel", "clickOnSubmit"],
  setup(props, { emit }) {
    const visitorStore = useVisitorStore();
    const state = reactive({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      observation: "",
      submitIsLoading: false,
    });

    const btnAdd: ContentBtn = {
      label: "Ajouter",
      onClick: () => console.log("Ajouter un visiteur"),
    };

    const btnCancel: ContentBtn = {
      label: "Annuler",
      onClick: () => emit("cancel"),
    };

    async function onSubmit() {
      state.submitIsLoading = true;

      await visitorStore.addVisitor({
        firstName: state.firstName,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber,
        email: state.email,
        status: state.observation,
        createdDate: "",
      });
      state.submitIsLoading = false;
      emit("clickOnSubmit", true);
      console.log(state.firstName);
    }

    return { btnAdd, btnCancel, state, onSubmit };
  },
});
</script>

<style scoped></style>
