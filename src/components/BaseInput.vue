<template>
  <div>
    <div v-if="hasSlot" class="resizeSvg absolute z-10 m-5 mt4">
      <slot />
    </div>
    <div class="relative">
      <input
        class="w-full ctm rounded-lg"
        :type="inputType"
        :placeholder="placeHolder"
        :class="[hasSlot ? 'pl-14' : 'pl-4']"
        :readonly="readonly"
        :value="content"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  name: "BaseInput",
  components: {},
  props: {
    content: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    hasSlot: {
      type: Boolean,
      default: false,
    },
    placeHolder: {
      type: String,
    },
    inputType: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ["getInputValue", "update:modelValue"],
  setup(props, { emit }) {
    const state = {
      inputValue: "",
    };

    watch(
      () => state.inputValue,
      (old, newValue) => {
        console.log(newValue, "in watcher");
        emit("update:modelValue", newValue);
      },
      {
        immediate: true,
      }
    );

    function onChange(payload: Event) {
      console.log("tes");
      console.log((payload.target as any).value);

      state.inputValue = (payload.target as any).value;
      console.log(state.inputValue);
      emit("getInputValue", state.inputValue);
      console.log(state.inputValue, "====>>>");
    }

    return { state, onChange };
  },
});
</script>

<style scoped>
.ctm {
  height: 62px;
  background-color: #e2e8ec;
  border: none;
  outline: none;
}

.resizeSvg {
  width: 20px;
}

.mt4 {
  margin-top: 22px;
}
</style>
