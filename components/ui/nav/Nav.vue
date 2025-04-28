<template>
  <nav class="bg-[var(--color-main)] w-[100%] h-[60px] flex items-center text-nowrap">
    <ul class="flex items-center mx-auto w-fit h-full">
      <NuxtLink to="/services/ТЕРАПЕВТИЧНА%20СТОМАТОЛОГІЯ">Послуги</NuxtLink>
      <!-- <NuxtLink to="/" @click.prevent="() => scrollToElement('aboutUs')">Про нас</NuxtLink> -->
      <NuxtLink to="/" @click.prevent="() => scrollToElement('reviews')">Відгуки</NuxtLink>
      <NuxtLink to="/" @click.prevent="() => scrollToElement('footer')">Контакти</NuxtLink>
    </ul>
  </nav>
</template>
<script setup lang="ts">
const scrollToElement = async (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    await navigateTo('/');
    setTimeout(() => {
      const elAfter = document.getElementById(id);
      if (elAfter) {
        elAfter.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};
</script>
<style scoped>
nav {
  color: #fff;
}

nav a {
  height: 100%;
  display: flex;
  align-items: center;
  padding-inline: 24px;
  transition: background-color, 0.3s;
}

nav a:hover {
  background-color: #186075;
}

@media (max-width: 420px) {
  nav a {
    font-size: 13px;
    padding-inline: 16px;
  }
}
</style>
