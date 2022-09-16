<template>
  <div
    class="flex justify-between border border-primary rounded-lg p-4 bg-[#EEF2FA] mb-4"
  >
    <div class="flex items-center mr-24">
      <div class="w-16 h-16 rounded-full bg-[#F5F5F5]"></div>
      <div class="ml-4">
        <h1 class="font-bold text-base">
          {{ user.firstName }} {{ user.lastName }}
        </h1>
        <span class="font-bold text-sm">Téléphone : </span>
        <span class="font-semibold text-sm">{{ user.phoneNumber }}</span>
        <div>
          <span class="font-bold text-sm">Email : </span>
          <span class="font-semibold text-sm">{{ user.email }}</span>
        </div>
        <div class="mt-1 flex items-center">
          <CalendarIcon />
          <h3 class="ml-2">Crée le {{ user.createdDate }}</h3>
        </div>
      </div>
    </div>

    <CustomButton
      v-if="!isStartJourney"
      :btn="btnAddPresence"
      :is-active="true"
      style="width: 210px"
    ></CustomButton>
    <CustomButton
      v-else
      :btn="btnEndPresence"
      :is-active="false"
      style="width: 210px"
      custom-height="h-12 bg-danger text-white border-danger"
    ></CustomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ContentBtn, Visitor } from "../helpers/types";
import CalendarIcon from "./svgs/calendar.vue";
import CustomButton from "./CustomButton.vue";

export default defineComponent({
  name: "VisitorCard",
  components: {
    CalendarIcon,
    CustomButton,
  },
  props: {
    user: {
      type: Object as PropType<Visitor>,
      required: true,
    },
    isStartJourney: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["clickOnAddPresence"],
  setup(props, { emit }) {
    const btnAddPresence: ContentBtn = {
      label: "Ajouter une présence",
      onClick: () => clickOnAddPresence(),
    };

    const btnEndPresence: ContentBtn = {
      label: "Terminer la journée",
      onClick: () => clickOnAddPresence(),
    };

    function clickOnAddPresence() {
      emit("clickOnAddPresence", true);
    }
    return {
      btnAddPresence,
      clickOnAddPresence,
      btnEndPresence,
    };
  },
});
</script>

<style scoped></style>
