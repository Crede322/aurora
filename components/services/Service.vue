<template>
  <div
    class="py-[24px] px-[14px] border-b border-[var(--color-textgray)] flex justify-between items-center transition-bg-color duration-600"
  >
    <p class="text-[var(--color-main)] font-bold">{{ name }}</p>
    <p class="text-[var(--color-main)] text-[18px] font-bold">{{ value }} Грн</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  value: String,
});
</script>

<style scoped></style>
