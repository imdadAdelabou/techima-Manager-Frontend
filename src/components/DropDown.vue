<template>
  <div>
    <div>
      <!-- <DropDownIcon class="absolute z-10" /> -->
      <div class="cursor-pointer">
        <div>
          <BaseInput
            place-holder="Choisisser un rôle"
            :readonly="true"
            :has-slot="true"
            @click="updateDropState"
            :content="role.label"
          >
            <DropDownIcon />
          </BaseInput>
        </div>
        <DropDownCard
          :roles="roles"
          v-if="isDrop"
          @select-role="selectRole"
        ></DropDownCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseInput from "./BaseInput.vue";
import DropDownIcon from "./svgs/DropDownIcon.vue";
import DropDownCard from "./DropDownCard.vue";
import { RoleType } from "../helpers/types";
import { roles } from "../helpers/constants";

export default defineComponent({
  name: "DropDown",
  components: {
    BaseInput,
    DropDownIcon,
    DropDownCard,
  },
  emits: ["choice"],
  setup(props, { emit }) {
    const role = ref({} as RoleType);
    const isDrop = ref(false);

    function updateDropState() {
      isDrop.value = !isDrop.value;
    }
    function selectRole(key: RoleType) {
      role.value = key;
      emit("choice", key);
      updateDropState();
    }
    return { roles, isDrop, updateDropState, role, selectRole };
  },
});
</script>

<style scoped></style>
