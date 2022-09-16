<template>
  <div class="card bg-white p-4 rounded-lg mt-2 absolute z-20 w-1/3">
    <h3
      v-for="(role, index) in roles"
      :key="index"
      class="p-1"
      :class="[index != roles.length - 1 ? 'pb-2' : '']"
      @click="selectRole(role)"
    >
      {{ role.label }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RoleType } from "../helpers/types";

export default defineComponent({
  name: "DropDownCard",
  props: {
    roles: {
      type: Object as PropType<RoleType[]>,
      required: true,
    },
  },
  emits: ["selectRole"],
  setup(props, { emit }) {
    function selectRole(value: RoleType) {
      emit("selectRole", value);
    }

    return { selectRole };
  },
});
</script>

<style scoped>
.card {
  box-shadow: 1px 3px 9px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 3px 9px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 3px 9px -3px rgba(0, 0, 0, 0.75);
}

h3:hover {
  background-color: #e2e8ec;
  border-radius: 4px;
}
</style>
