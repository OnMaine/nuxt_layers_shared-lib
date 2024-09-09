<template>
  <div class="layout">
    <h2>Extending Layouts from Lib - (1)</h2>
    <slot />
  </div>

</template>

<style lang="scss" scoped>
  .layout {
    background: url('assets/bg.jpg') center center no-repeat;
    background-size: cover;
    height: 100%;
  }
</style>