<template>
  <div class="main__styles">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup></script>
<style scoped>
* {
  font-family: 'Arial', sans-serif;
  transition: opacity 1s ease; /* Плавный переход */
}

body.loaded {
  opacity: 1; /* Когда шрифт загружен, делаем видимым */
}

body {
  opacity: 0; /* Изначально скрываем текст, пока шрифт не загрузится */
}

.main__styles {
  overflow-x: hidden;
}
</style>
