<template>
  <header>
    <div class="header flex items-center justify-between max-w-[1340px] mx-auto py-[20px]">
      <UiLogo />
      <div>
        <h3 class="ml-[26px]">9:00 - 20:00 без выходных</h3>
        <a class="link_geo relative flex gap-1.5 items-center" href="#"
          ><img class="w-5 h-5" src="/img/mark.svg" alt="geo" />
          <h3>вулиця Остафія Дашкевича, 26, Київ</h3>
          <div class="link_underline absolute w-[100%] h-[0.5px] bg-[#145265] bottom-[-2px]"></div
        ></a>
      </div>
      <div class="inner-row flex gap-[70px]">
        <div class="numbers flex flex-col gap-[6px]">
          <a class="leading-none" href="tel:+380977665611">+ 38 (097) 766-5611</a>
          <a class="leading-none" href="tel:+380507735620">+ 38 (050) 773-5620</a>
        </div>
        <button class="border-[2px] border-[var(--color-main)] px-[18px] py-[6px] rounded-[10px]">
          <h3>Залишити заявку</h3>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
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
</style>
