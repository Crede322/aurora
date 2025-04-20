<template>
  <div class="wrapper__main relative">
    <Header></Header>
    <Nav></Nav>
    <main class="mx-auto">
      <slot />
    </main>
    <UiFooter />
  </div>
</template>
<script setup lang="ts">
import Header from '~/components/ui/header/Header.vue';
import Nav from '~/components/ui/nav/Nav.vue';
</script>
<style scoped>
.wrapper__main {
  /* background: rgb(255, 255, 255); */
  /* background: linear-gradient(185deg, rgba(255, 255, 255, 1) 0%, rgba(0, 234, 255, 0.7) 100%); */
}
</style>
