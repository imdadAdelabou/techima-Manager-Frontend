<template>
  <div v-if="isLoading" class="flex justify-center h-screen items-center">
    <SpinnerPage />
  </div>
  <div v-else>
    <AppBar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { createToast } from "mosha-vue-toastify";
import { defineComponent, onBeforeMount, ref } from "vue";
import AppBar from "./components/AppBar.vue";
import SideBar from "./components/global/SideBar.vue";
import SpinnerPage from "./components/global/SpinnerPage.vue";
import { messages } from "./helpers/constants";
import { User } from "./helpers/types";
import router from "./router";
import { dangerToastStyle, useUserStore } from "./stores/user";

export default defineComponent({
  components: { AppBar, SideBar, SpinnerPage },
  setup() {
    const isLoading = ref(false);
    const userStore = useUserStore();

    onBeforeMount(async () => {
      console.log("On App");
      isLoading.value = true;

      if (localStorage.getItem("userToken") == null) {
        isLoading.value = false;
        router.push("/");
        return;
      }

      if (
        userStore.$state.user.id != null &&
        userStore.$state.user.id.length != 0
      ) {
        isLoading.value = false;
        return;
      }
      let userData = await userStore.getDataOfUserConnected();
      if (!userData) {
        createToast(messages.errorOccurs, dangerToastStyle);
        return;
      }
      userStore.$state.user = userData as User;
      isLoading.value = false;
    });
    return { isLoading };
  },
});
</script>

<style scoped>
.disabledScroll::-webkit-scrollbar {
  display: none;
}
</style>
