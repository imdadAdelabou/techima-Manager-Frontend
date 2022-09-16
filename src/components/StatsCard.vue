<template>
  <div>
    <div class="w-full border border-[#A5ABB3] rounded-2xl p-4 flex">
      <div class="w-11 h-11 rounded-[10px]" :class="statItem.bgColor"></div>
      <div class="ml-3">
        <h3 class="font-semibold text-sm text-[#5F738C]">
          {{ statItem.label }}
        </h3>
        <h2 class="font-bold text-xl text-[#171B1E]">{{ statItem.content }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { StatItem } from "../helpers/types";

export default defineComponent({
  name: "StatsCard",
  props: {
    statItem: { type: Object as PropType<StatItem>, required: true },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
