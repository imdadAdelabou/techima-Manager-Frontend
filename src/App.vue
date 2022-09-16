<template>
  <AppBar />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "./components/AppBar.vue";
import SideBar from "./components/global/SideBar.vue";

export default defineComponent({
  components: { AppBar, SideBar },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.disabledScroll::-webkit-scrollbar {
  display: none;
}
</style>
