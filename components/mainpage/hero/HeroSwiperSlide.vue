<template>
  <div class="hero relative flex items-center h-full 3xl:bg-red-500 w-[98%]">
    <div>
      <slot></slot>
      <img
        v-if="imgMain === 'footage1'"
        class="absolute w-[49%] h-[90%] top-[8%] right-[0] rounded-[10px] z-2"
        src="/img/footage1.webp"
        alt="footage1"
      />
      <img
        v-else
        class="absolute w-[49%] h-[90%] top-[8%] right-[0] rounded-[10px] z-2"
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
<style scoped>
@media (max-width: 1200px) {
  .hero img {
    opacity: 0;
  }
}
</style>
