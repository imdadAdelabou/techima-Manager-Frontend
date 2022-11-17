<template>
  <div class="mt-20">
    <EmptyBoardIcon />
    <h2 class="text-center font-bold mt-4">Aucun visiteur</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmptyBoardIcon from "../svgs/EmptyBoardIcon.vue";

export default defineComponent({
  name: "EmptyBoard",

  setup() {
    return {};
  },
  components: { EmptyBoardIcon },
});
</script>

<style scoped></style>
