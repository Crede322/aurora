<template>
  <div class="main__styles">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup></script>
<style scoped>
body {
  font-family: 'Source Sans 3', sans-serif;
  transition: opacity 1s ease; /* Плавный переход */
}

body.loaded {
  opacity: 1; /* Когда шрифт загружен, делаем видимым */
}

body {
  opacity: 0; /* Изначально скрываем текст, пока шрифт не загрузится */
}
</style>
