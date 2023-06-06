<template>
  <div>
    <button
      @click="btn.onClick"
      class="w-full font-bold rounded-lg"
      :class="[
        isActive
          ? 'bg-primary white'
          : disabled
          ? 'bg-[#808080] white'
          : 'border border-[#8F381A]',
        customHeight,
      ]"
      :disabled="disabled"
    >
      <div v-if="isLoading" class="flex justify-center items-center">
        <CircularLoader width="2em" />
      </div>
      <span v-else> {{ btn.label }} </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ContentBtn } from "../helpers/types";
import CircularLoader from "./global/CircularLoader.vue";

export default defineComponent({
  name: "CustomButton",
  components: {
    CircularLoader,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    btn: {
      type: Object as PropType<ContentBtn>,
      required: true,
    },
    customHeight: {
      type: String,
      default: "h-12",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.white {
  color: white;
}

.gray {
  background-color: gray;
}
</style>
