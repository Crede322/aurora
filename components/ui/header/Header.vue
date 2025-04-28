<template>
  <header>
    <div
      class="header block md:flex items-center justify-between max-w-[1340px] mx-auto py-[20px] text-nowrap"
    >
      <UiLogo />
      <div class="hidden lg:block">
        <h3 class="ml-[26px]">9:00 - 20:00 без вихідних</h3>
        <a class="link_geo relative flex gap-1.5 items-center" :href="geoLink" target="_blank"
          ><img class="w-5 h-5" src="/img/mark.svg" alt="geo" />
          <h3>вулиця Остафія Дашкевича 26, Київ</h3>
          <div class="link_underline absolute w-[100%] h-[0.5px] bg-[#145265] bottom-[-2px]"></div
        ></a>
      </div>
      <div class="flex items-center justify-between w-full md:w-fit md:gap-[120px]">
        <NuxtLink
          @click.prevent="() => scrollToElement('footer')"
          class="block lg:hidden text-nowrap text-[20px]"
        >
          Наші контакти
        </NuxtLink>
        <div class="numbers flex-col gap-[6px] hidden lg:flex">
          <a class="leading-none" href="tel:+380665171324">+ 38 (066) 517-1324</a>
        </div>
        <NuxtLink
          to="/"
          @click.prevent="() => scrollToElement('contactForm')"
          class="border-[2px] border-[var(--color-main)] px-[18px] py-[6px] rounded-[10px] text-nowrap"
        >
          <h3>зв'яжіться з нами</h3>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const geoLink = ref(
  'https://www.google.com/maps/place/стоматологія+AURORA/@50.4898418,30.6018002,17z/data=!4m14!1m7!3m6!1s0x40d4cffc85becc53:0x726769c5a22af879!2z0YHRgtC-0LzQsNGC0L7Qu9C-0LPRltGPIEFVUk9SQQ!8m2!3d50.489898!4d30.6022031!16s%2Fg%2F11cm0gbfrl!3m5!1s0x40d4cffc85becc53:0x726769c5a22af879!8m2!3d50.489898!4d30.6022031!16s%2Fg%2F11cm0gbfrl?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D'
);

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
.header a {
  color: var(--color-main);
}

.header h3 {
  color: var(--color-main);
}

.link_underline {
  opacity: 0;
  transition: opacity, 0.3s;
}
.link_geo:hover .link_underline {
  opacity: 1;
}

@media (max-width: 1400px) {
  header {
    max-width: 96vw;
    margin: auto;
  }
}
</style>
