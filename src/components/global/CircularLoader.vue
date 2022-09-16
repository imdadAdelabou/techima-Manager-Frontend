<template>
  <div>
    <svg
      :style="{
        width: width,
      }"
      viewBox="25 25 50 50"
    >
      <circle
        :style="{
          stroke: stroke,
        }"
        cx="50"
        cy="50"
        r="20"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    width: {
      type: String,
      default: "3.75em",
    },
    stroke: {
      type: String,
      default: "#fc2f70",
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  //   width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  //   stroke: #fc2f70;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
