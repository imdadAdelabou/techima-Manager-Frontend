<template>
  <div class="flex overflow-hidden h-screen w-screen">
    <SideBar></SideBar>
    <div class="w-full disabledScroll">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./global/SideBar.vue";

export default defineComponent({
  name: "ContentView",
  components: {
    SideBar,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
