<template>
  <footer id="footer" class="footer bg-[var(--color-darkblue)] py-[56px] px-[3%]">
    <div
      class="max-w-[1340px] mx-auto flex flex-col sm:flex-row justify-between gap-[40px] sm:gap-0"
    >
      <UiLogo white="true" />
      <SharedContacts />
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer {
  color: var(--color-textgray);
}
</style>
