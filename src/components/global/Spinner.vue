<template>
  <div class="widget-loader relative w-full h-2 bg-transparent overflow-hidden">
    <div
      class="transform-gpu absolute widget-linear-loader block h-full w-1/4 bg-primary rounded"
    ></div>
  </div>
</template>

<style lang="scss">
@keyframes run {
  0% {
    left: 0;
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    left: 100%;
    transform: translateX(100%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.widget-linear-loader {
  animation: run 1.2s cubic-bezier(0, 0.74, 0.58, 1) infinite;
}
</style>
