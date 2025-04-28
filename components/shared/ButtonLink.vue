<template>
  <div
    class="wrapper__button w-[200px] rounded-[18px] border-[1px] border-[var(--color-accent)] flex justify-center items-center px-[44px] py-[18px]"
  >
    <h3 class="text-[var(--color-accent)] font-bold">{{ buttonText }}</h3>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  buttonText: String,
});
</script>
<style scoped>
.wrapper__button,
.wrapper__button h3 {
  transition: background-color 0.3s;
}

.wrapper__button:hover {
  background-color: var(--color-accent);
}

.wrapper__button:hover h3 {
  color: #fff;
}
</style>
