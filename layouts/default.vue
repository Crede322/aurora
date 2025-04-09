<template>
  <div class="wrapper__main relative">
    <Header></Header>
    <main class="container mx-auto">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import Header from '~/assets/components/ui/header/Header.vue';
</script>
<style scoped>
.wrapper__main {
  /* background: rgb(119, 243, 215);
  background: linear-gradient(
    35deg,
    rgba(119, 243, 215, 1) 0%,
    rgba(35, 164, 176, 1) 73%,
    rgba(35, 164, 176, 1) 99%
  ); */
  background: rgb(255, 255, 255);
  background: linear-gradient(
    185deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(43, 204, 221, 1) 26%,
    rgba(37, 172, 184, 1) 74%,
    rgba(35, 164, 176, 1) 100%
  );
}
</style>
