<template>
  <ContentView>
    <Spinner class="mr-6 mt-6" v-if="state.pageIsLoading" />
    <div v-else>
      <div class="grid grid-cols-2 mt-6 w-2/3 gap-2 m-auto">
        <StatsCard
          v-for="(state, index) in stats"
          :key="index"
          :stat-item="state"
        ></StatsCard>
      </div>
      <div
        class="content mt-6 flex w-full items-end justify-center mb-6 overflow-auto"
      >
        <BaseInput
          placeHolder="Rechercher un visiteur"
          class="w-2/4 mr-4"
        ></BaseInput>
        <CustomButton
          :btn="btnAddUser"
          :isActive="true"
          custom-height="h-16"
          class="w-1/5"
        ></CustomButton>
      </div>

      <div class="flex justify-center items-center w-full">
        <div>
          <VisitorCard
            :is-start-journey="state.jouneyIsStart"
            v-for="(visitor, index) in state.visitors"
            :user="visitor"
            :key="index"
            @click-on-add-presence="clickOnAddPresence(visitor)"
          ></VisitorCard>
        </div>
      </div>

      <Modal
        title="Ajouter une présence"
        v-if="state.isModalOpen"
        @close-modal="updateModalState()"
      >
        <div class="flex">
          <BaseInput
            class="w-full mr-4"
            placeHolder=""
            :content="visitorData.firstName"
            :readonly="true"
          >
          </BaseInput>
          <BaseInput
            class="w-full"
            placeHolder=""
            :content="visitorData.lastName"
            :readonly="true"
          ></BaseInput>
        </div>
        <BaseInput
          class="mt-4"
          :readonly="true"
          :content="visitorData.phoneNumber"
        ></BaseInput>
        <BaseInput class="mt-4" :readonly="true" :content="visitorData.email">
        </BaseInput>
        <BaseInput class="mt-4" :readonly="true" :content="visitorData.status">
        </BaseInput>
        <div class="flex">
          <div class="w-full mt-6">
            <CustomButton
              :btn="btnStartJourney"
              :is-active="true"
              class="w-full"
              v-if="!state.jouneyIsStart"
            >
            </CustomButton>
            <CustomButton
              v-else
              :btn="btnEndJourney"
              :is-active="false"
              custom-height="h-12 bg-danger text-white border-danger"
            >
            </CustomButton>
          </div>
          <CustomButton
            :btn="btnCancelAction"
            :is-active="false"
            class="mt-6 w-full ml-4"
          >
          </CustomButton>
        </div>
      </Modal>
      <Modal
        title="Ajouter un visiteur"
        v-if="state.isAddVisitorModalOpen"
        @close-modal="updateAddVisitorModalState()"
      >
        <AddAVisitor
          @cancel="updateAddVisitorModalState()"
          @clickOnSubmit="clickOnSubmit()"
        ></AddAVisitor>
      </Modal>
    </div>
  </ContentView>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from "vue";
import BaseInput from "../../components/BaseInput.vue";
import CustomButton from "../../components/CustomButton.vue";
import { ContentBtn, StatItem, Visitor } from "../../helpers/types";
import VisitorCard from "../../components/VisitorCard.vue";
import Modal from "../../components/global/Modal.vue";
import AddAVisitor from "../../components/garden/AddAVisitor.vue";
import { useUserStore } from "../../stores/user";
import ContentView from "../../components/ContentView.vue";
import UserIcon from "../../components/svgs/UserIcon.vue";
import CheckIcon from "../../components/svgs/CheckIcon.vue";
import StatsCard from "../../components/StatsCard.vue";
import Spinner from "../../components/global/Spinner.vue";
import { useVisitorStore } from "../../stores/visitor";

export default defineComponent({
  name: "DashboardView",
  components: {
    BaseInput,
    CustomButton,
    VisitorCard,
    Modal,
    AddAVisitor,
    ContentView,
    UserIcon,
    CheckIcon,
    StatsCard,
    Spinner,
  },
  setup() {
    const user = useUserStore().getUser;
    const visitorStore = useVisitorStore();

    const state = reactive({
      isAddVisitorModalOpen: false,
      isModalOpen: false,
      jouneyIsStart: false,
      pageIsLoading: false,
      visitors: [] as Visitor[],
    });

    const stats: StatItem[] = [
      {
        label: "Total des visiteurs",
        content: 0,
        bgColor: "bg-[#2062F6]",
        icon: UserIcon,
      },
      {
        label: "Total des visiteurs ajouté aujourd'hui",
        content: 0,
        bgColor: "bg-[#287D3C]",
        icon: CheckIcon,
      },
    ];

    const visitorData: Visitor = {
      firstName: "Adelakoun",
      lastName: "John",
      phoneNumber: "+229 67558797",
      createdDate: getStructuredDate(),
      email: "imdadadelabou@gmail.com",
      status: "Étudiant",
    };

    function updateModalState() {
      state.isModalOpen = !state.isModalOpen;
    }

    function updateAddVisitorModalState() {
      state.isAddVisitorModalOpen = !state.isAddVisitorModalOpen;
    }

    const btnAddUser: ContentBtn = {
      label: "Ajouter un visiteur",
      onClick: () => updateAddVisitorModalState(),
    };

    const btnCancel: ContentBtn = {
      label: "Annuler",
      onClick: () => console.log("Annuler"),
    };

    const btnStartJourney: ContentBtn = {
      label: "Démarrer la journée",
      onClick: () => startJourney(),
    };

    const btnEndJourney: ContentBtn = {
      label: "Terminer la journée",
      onClick: () => console.log("Terminer la journée"),
    };

    const btnCancelAction: ContentBtn = {
      label: "Annuler",
      onClick: () => updateModalState(),
    };

    function getStructuredDate() {
      const date = new Date();

      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    function clickOnSubmit() {
      state.isAddVisitorModalOpen = false;
      reloadPage();
    }

    function clickOnAddPresence(vistor: Visitor) {
      updateModalState();
      console.log(vistor.email);
    }

    function startJourney() {
      state.jouneyIsStart = !state.jouneyIsStart;
      updateModalState();
    }

    async function reloadPage() {
      state.pageIsLoading = true;
      const result = await visitorStore.getAllVisitors();
      stats[0].content = result.length;
      state.visitors = result;
      state.pageIsLoading = false;
    }

    onBeforeMount(async () => {
      console.log("before mount");
      reloadPage();
    });

    return {
      btnAddUser,
      visitorData,
      updateModalState,
      clickOnAddPresence,
      updateAddVisitorModalState,
      clickOnSubmit,
      btnCancel,
      btnCancelAction,
      btnStartJourney,
      btnEndJourney,
      state,
      user,
      stats,
    };
  },
});
</script>

<style scoped></style>
