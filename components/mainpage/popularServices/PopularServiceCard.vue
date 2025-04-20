<template>
  <NuxtLink
    to="/"
    class="wrapper__card h-[220px] bg-[var(--color-main)] rounded-[8px] overflow-hidden relative"
  >
    <div class="flex justify-center items-center pt-[14px]">
      <span class="text-white text-[20px] font-bold">
        {{ textMain }}
      </span>
    </div>
    <div class="pt-[8px]">
      <slot />
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps({
  textMain: String,
});
</script>
<style scoped>
.wrapper__card {
  transition: scale, 0.4s;
}

.wrapper__card:hover {
  scale: 1.05;
}
</style>
