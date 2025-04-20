<template>
  <div class="tw-container">
    <h2 class="tw-heading mx-auto w-fit mb-[120px]">Почему выбирают нас</h2>
    <div class="grid grid-cols-3 grid-rows-2 max-w-[1340px] mx-auto gap-x-[30px] gap-y-[40px]">
      <WhyUsCard
        text-main="більше 20 років досвіду"
        text-secondary="Працюємо у сфері стоматологічних послуг із 2005 року."
        ><img src="/public/img/aboutUsCards/aboutUsCardImg1.png" alt="card1"
      /></WhyUsCard>
      <WhyUsCard
        text-main="Понад 30 000 задоволених пацієнтів"
        text-secondary="Задоволені пацієнти це те, що дозволяє нам пишатися своєю роботою."
        ><img src="/img/aboutUsCards/aboutUsCardImg2.png" alt="card2"
      /></WhyUsCard>
      <WhyUsCard
        text-main="Гарантія — 1 рік"
        text-secondary="Надаємо гарантію на встановлені пломби, коронки, протези, імплантати (залежно від клінічного випадку)."
        ><img src="/img/aboutUsCards/aboutUsCardImg4.png" alt="card4"
      /></WhyUsCard>
      <WhyUsCard
        text-main="100% стерильність"
        text-secondary="Застосовуємо одноразові інструменти для огляду та лікування пацієнтів."
        ><img src="/img/aboutUsCards/aboutUsCardImg5.png" alt="card5"
      /></WhyUsCard>
      <WhyUsCard
        text-main="Середній стаж лікарів — 8 років"
        text-secondary="Наші лікарі-стоматологи можуть допомогти вам вирішити проблему будь-якої складності."
        ><img src="/img/aboutUsCards/aboutUsCardImg6.png" alt="card6"
      /></WhyUsCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import WhyUsCard from './WhyUsCard.vue';
</script>
<style scoped>
.tw-container img {
  width: 60px;
  height: 60px;
}
</style>
