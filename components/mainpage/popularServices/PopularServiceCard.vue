<template>
  <NuxtLink
    :to="link"
    class="wrapper__card aspect-[8/5] w-[100%] sm:w-[45%] md:w-[46%] lg:w-[29.5%] sm:aspect-[8/5] bg-[var(--color-main)] rounded-[8px] overflow-hidden relative"
  >
    <div class="flex justify-center items-center pt-[14px] pb-[6px] z-2">
      <span class="text-white text-[20px] font-bold text-nowrap">
        {{ textMain }}
      </span>
    </div>
    <div class="z-1 overflow-hidden relative h-full">
      <slot />
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps({
  textMain: String,
  link: String,
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
