<template>
  <div class="relative flex items-center h-full">
    <div>
      <h2 class="tw-heading">{{ textMain }}</h2>
      <h3 class="tw-text-thin">{{ textSecondary }}</h3>
      <img
        v-if="imgMain === 'footage1'"
        class="absolute w-[49%] h-[90%] top-[8%] right-[-45px] rounded-[10px]"
        src="/img/footage1.webp"
        alt="footage1"
      />
      <img
        v-else
        class="absolute w-[49%] h-[90%] top-[8%] right-[-45px] rounded-[10px]"
        src="/img/footage2.webp"
        alt="footage1"
      />
    </div>
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
  imgMain: {
    type: String,
    required: false,
  },
});
</script>
