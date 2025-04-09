<template>
  <header
    class="max-w-[1480px] header fixed inset-0 z-1 overflow-hidden rounded-b-[30px] h-[80px] px-[46px] flex justify-between mx-auto text-[#fff]"
  >
    <div class="flex items-center justify-center">
      <button class="logo flex items-center gap-[10px] select-none">
        <img class="w-[80px] h-[50px]" src="~/assets/img/logo.png" alt="logo" />
        <div class="relative pt-[4px]">
          <h2 class="text-[26px] text-[#fff] uppercase leading-[20px]">AURORA</h2>
          <h2 class="text-[11px] text-[#fff] uppercase">― DENTAL CLINIC ―</h2>
        </div>
      </button>
    </div>

    <div class="flex gap-[40px] items-center">
      <div class="flex gap-[30px] mr-[50px]">
        <button class="header__link"><h3>О нас</h3></button>
        <button class="header__link"><h3>Услуги</h3></button>
        <button class="header__link"><h3>Контакты</h3></button>
        <button class="header__link"><h3>Отзывы</h3></button>
      </div>
      <a class="header__link" href="tel:+6234636436">
        <h4 class="text-[20px]">+793000000000</h4>
      </a>
      <div class="flex">
        <button class="border-[2px] px-[16px] py-[6px] rounded-[12px]">
          <h3>Связаться с нами</h3>
        </button>
      </div>
    </div>
  </header>
  <div class="h-[80px] w-[100%]"></div>
  <div
    class="header__background max-w-[1480px] mx-auto absolute inset-0 h-[80px] z-0 rounded-b-[30px]"
  ></div>
</template>
<script setup lang="ts"></script>
<style scoped>
.header {
  background-color: rgba(255, 255, 255, 0.1);

  /* box shadow */
  -webkit-box-shadow: 0px 2px 43px 1px rgba(10, 57, 68, 1);
  -moz-box-shadow: 0px 2px 43px 1px rgba(10, 57, 68, 1);
  box-shadow: 0px 2px 43px 1px rgba(10, 57, 68, 1);

  backdrop-filter: blur(16px);
}

.header h3 {
  font-size: 18px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5), 0 0 1px rgba(0, 0, 0, 0.3);
}

.header h4 {
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.2);
}

.header {
  background: rgb(119, 243, 215);
  background: linear-gradient(
    41deg,
    rgba(119, 243, 215, 0.65) 0%,
    rgba(27, 128, 138, 0.65) 33%,
    rgba(43, 204, 221, 0.65) 55%,
    rgba(51, 140, 149, 0.65) 80%,
    rgba(35, 164, 176, 0.65) 99%
  );
}

.header button {
  cursor: pointer;
}

.header__link:hover {
  /* opacity: 0.5; */
  color: rgba(219, 248, 241, 1);
  text-shadow: none !important;
}
</style>
