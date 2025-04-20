<template>
  <div>
    <div class="flex gap-[20px] items-center mb-[12px]">
      <slot />
      <h3 class="text-[18px] text-[var(--color-main)] font-bold">{{ textMain }}</h3>
    </div>
    <h3 class="tw-text-thin-gray">{{ textSecondary }}</h3>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  textMain: {
    type: String,
    required: false,
  },
  textSecondary: {
    type: String,
    required: false,
  },
});
</script>
