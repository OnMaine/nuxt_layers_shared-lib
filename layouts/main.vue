<template>
  <div class="layout">
    <h2>Extending Layouts from Lib - (1)</h2>
    <slot />

    <img src="assets/bg.jpg" width="250" height="20">
  </div>

</template>

<style lang="scss" scoped>
  .layout {
    background: url('assets/bg.jpg') center center no-repeat;
    background-size: cover;
    height: 100%;
  }
</style>