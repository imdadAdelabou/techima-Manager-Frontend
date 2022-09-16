<template>
  <div
    class="modal fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10"
  >
    <div
      class="modal-widget new-interface flex flex-col content rounded-lg bg-white"
      :class="{ 'full-content': full }"
    >
      <!---->
      <div
        v-if="title || closeIcon"
        class="modal-header flex flex-row flex-nowrap justify-between items-start min-h-[38px] bg-primary text-white rounded-t-lg"
        style="padding: 23.5px 29.29px 23.5px 24px"
      >
        <span
          class="modal-title text-lg text-C30D28 font-semibold -tracking-[0.02em] leading-snug block text-left overflow-ellipsis overflow-hidden"
        >
          {{ title }}
        </span>
        <span
          v-if="closeIcon"
          class="inline-flex cursor-pointer"
          @click="$emit('closeModal')"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.70703 0.292969L0.292969 1.70703L6.58594 8L0.292969 14.293L1.70703 15.707L8 9.41406L14.293 15.707L15.707 14.293L9.41406 8L15.707 1.70703L14.293 0.292969L8 6.58594L1.70703 0.292969Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <!---->
      <div class="modal-container pt-6 px-6 pb-10">
        <slot />
      </div>
      <!---->
      <div class="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseModal",
  props: {
    full: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeIcon: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "Modal",
    },
    components: {},
  },
  emits: ["closeModal"],
});
</script>

<style scoped lang="scss">
.small-modal {
  & > .content {
    height: auto !important;
  }
}

.modal {
  background: rgba(0, 0, 0, 0.5);

  :deep(.content) {
    min-width: 500px;
  }

  :deep(.modal-widget) {
    max-height: 95vh;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.22);
  }

  .modal-header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  .modal-container {
    overflow-y: auto;
    height: 100%;
  }
}
</style>
