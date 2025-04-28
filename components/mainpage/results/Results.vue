<template>
  <div class="tw-container">
    <h2 class="tw-heading mx-auto w-fit mb-[40px] md:mb-[80px]">
      Результати лікування у нашій клініці
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[55px]">
      <MainpageResultsComparison
        text-main="Чищення зубів"
        left-image="/img/mainpageComparisons/comparison1left.jpg"
        right-image="/img/mainpageComparisons/comparison1right.jpg"
      />
      <MainpageResultsComparison
        text-main="Лікування ясен"
        left-image="/img/mainpageComparisons/comparison2left.jpg"
        right-image="/img/mainpageComparisons/comparison2right.jpg"
      />
      <MainpageResultsComparison
        text-main="Лікування карієсу"
        left-image="/img/mainpageComparisons/comparison3left.jpg"
        right-image="/img/mainpageComparisons/comparison3right.jpg"
      />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
