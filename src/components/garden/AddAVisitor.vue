<template>
  <div class="flex">
    <BaseInput
      placeHolder="Nom"
      class="w-full"
      @getInputValue="getFirstNameValue"
    >
    </BaseInput>
    <BaseInput
      placeHolder="Prénom"
      class="w-full ml-4"
      @getInputValue="getLastNameValue"
    >
    </BaseInput>
  </div>
  <BaseInput
    place-holder="Numéro de téléphone"
    class="mt-4"
    inputType="number"
    @getInputValue="getPhoneNumber"
  >
  </BaseInput>

  <BaseInput
    place-holder="Email"
    class="mt-4"
    inputType="email"
    @getInputValue="getEmail"
  ></BaseInput>
  <BaseInput
    place-holder="Observation"
    class="mt-4"
    @getInputValue="getObservation"
  ></BaseInput>
  <div class="mt-6 flex">
    <CustomButton
      :btn="btnAdd"
      :disabled="!isFormValid"
      :isActive="isFormValid"
      class="w-full"
      :is-loading="state.submitIsLoading"
    >
    </CustomButton>
    <CustomButton :btn="btnCancel" :is-active="false" class="w-full ml-4">
    </CustomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import { ContentBtn, StatItem } from "../../helpers/types";
import BaseInput from "../BaseInput.vue";
import CustomButton from "../CustomButton.vue";
import { useVisitorStore } from "../../stores/visitor";

export default defineComponent({
  name: "AddAVisitor",
  components: { BaseInput, CustomButton },
  emits: ["cancel", "clickOnSubmit"],
  setup(props, { emit }) {
    const state = reactive({
      form: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        observation: "",
      },
      submitIsLoading: false,
    });
    const visitorStore = useVisitorStore();

    const btnAdd: ContentBtn = {
      label: "Ajouter",
      onClick: () => console.log("Ajouter un visiteur"),
    };

    const btnCancel: ContentBtn = {
      label: "Annuler",
      onClick: () => emit("cancel"),
    };

    const isValidFirstName = computed(() => state.form.firstName.length > 0);
    const isValidLastName = computed(() => state.form.lastName.length > 0);
    const isFormValid = computed(() => isValidFirstName.value && isValidLastName.value);

    async function onSubmit() {
      // state.submitIsLoading = true;
      // const result: boolean = await visitorStore.addVisitor({
      //   firstName: state.firstName,
      //   lastName: state.lastName,
      //   phoneNumber: state.phoneNumber,
      //   email: state.email,
      //   status: state.observation,
      //   createdDate: "",
      // });
      // state.submitIsLoading = false;
      // if (result) {
      //   emit("clickOnSubmit", true);
      // }
      // console.log(state.firstName);
      console.log(isFormValid.value);
    }

    function getFirstNameValue(value: string) {
      console.log(value.length);
      state.form.firstName = value;
    }

    function getLastNameValue(value: string) {
      console.log(value.length);
      state.form.lastName = value;
    }

    function getPhoneNumber(value: string) {
      state.form.phoneNumber = value;
    }

    function getEmail(value: string) {
      state.form.email = value;
    }

    function getObservation(value: string) {
      state.form.observation = value;
    }

    return {
      btnAdd,
      btnCancel,
      state,
      onSubmit,
      getFirstNameValue,
      getLastNameValue,
      getPhoneNumber,
      getEmail,
      getObservation,
      isValidFirstName,
      isValidLastName,
      isFormValid,
    };
  },
});
</script>

<style scoped></style>
