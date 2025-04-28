<template>
  <!-- <div id="contacts" class="wrapper__contacts bg-[#e5e3df] py-[40px]"> -->
  <div
    class="bg-[var(--color-lightblue)] max-w-[94vw] w-fit md:ml-[10%] py-[40px] px-[20px] md:px-[60px]"
  >
    <h3 class="font-bold text-[var(--color-main)]">Наші контакти</h3>
    <div class="inner-row flex gap-[70px] pt-[20px]">
      <div class="numbers flex flex-col gap-[6px]">
        <a class="leading-none text-[18px]" href="tel:+380977665611">+ 38 (097) 766-5611</a>
        <a class="leading-none text-[18px]" href="tel:+380507735620">+ 38 (050) 773-5620</a>

        <a class="link_geo relative flex gap-1.5 items-center" href="#"
          ><img class="w-5 h-5" src="/img/mark.svg" alt="geo" />
          <h3>вулиця Остафія Дашкевича 26, Київ</h3>
          <div class="link_underline absolute w-[100%] h-[0.5px] bg-[#145265] bottom-[-2px]"></div
        ></a>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup lang="ts"></script>
<style scoped>
.wrapper__contacts a {
  color: var(--color-main);
}
</style>
