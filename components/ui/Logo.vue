<template>
  <NuxtLink to="/" class="flex items-center gap-[10px] cursor-pointer">
    <img
      class="w-68 aspect-[17/5]"
      :src="!white ? '/img/logo.png' : '/img/logoWhite.png'"
      alt="logo"
    />
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps({
  white: {
    type: String,
    required: false,
    default: false,
  },
});
</script>
