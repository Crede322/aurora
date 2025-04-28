<template>
  <div class="px-0 md:px-[16%]">
    <div class="bg-[var(--color-lightblue)] px-[24px] py-[30px] relative">
      <h3 class="text-center">{{ textMain }}</h3>
      <h3 class="text-center mt-[16px] font-bold">{{ reviewerName }}</h3>
      <!-- <div
        class="absolute w-[35px] h-[35px] bg-[var(--color-lightblue)] bottom-[-18px] left-1/2 transform -translate-x-1/2 rotate-45"
      ></div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  textMain: String,
  reviewerName: String,
});
</script>
<style scoped></style>
