<template>
  <div class="w-72 min-w-[18rem] bg-primary calH">
    <div
      v-for="(menu, index) in menus"
      :key="index"
      class="flex items-center cursor-pointer item p-6"
    >
      <component :is="menu.icon"> </component>
      <h3 class="text-white font-semibold text-base ml-2">{{ menu.label }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardIcon from "../svgs/DashboardIcon.vue";
import SettingIcon from "../svgs/SettingIcon.vue";

export interface MenuItem {
  label: string;
  icon: object;
}

export default defineComponent({
  name: "SideBar",
  components: {},
  setup() {
    const menus: MenuItem[] = [
      { label: "Tableau de bord", icon: DashboardIcon },
      { label: "Paramèttres", icon: SettingIcon },
    ];

    return { menus };
  },
});
</script>

<style scoped>
.calH {
  height: 100vh;
}

.item:hover {
  background-color: #0d5497;
}
</style>
