<template>
  <footer class="footer bg-[var(--color-lightblue)] py-[56px]">
    <div class="max-w-[1340px] mx-auto flex justify-between">
      <UiLogo />
      <ul>
        <li><NuxtLink to="/">Установка брекетов</NuxtLink></li>
        <li><NuxtLink to="/">Установка брекетов</NuxtLink></li>
        <li><NuxtLink to="/">Установка брекетов</NuxtLink></li>
      </ul>
      <ul>
        <li><NuxtLink to="/">Акции</NuxtLink></li>
        <li><NuxtLink to="/">Акции</NuxtLink></li>
        <li><NuxtLink to="/">Акции</NuxtLink></li>
      </ul>
      <ul>
        <li><NuxtLink to="/">Контакты</NuxtLink></li>
        <li><NuxtLink to="/">Контакты</NuxtLink></li>
        <li><NuxtLink to="/">Контакты</NuxtLink></li>
      </ul>
      <ul>
        <li><NuxtLink to="/">Карта сайта</NuxtLink></li>
      </ul>
      <div></div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer {
  color: var(--color-textgray);
}
</style>
