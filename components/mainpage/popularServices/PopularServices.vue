<template>
  <div class="bg-[var(--color-lightblue)] pb-[40px]">
    <div class="tw-container">
      <h2 class="tw-heading mx-auto w-fit mb-[40px] md:mb-[80px]">Наші послуги</h2>
      <div class="flex flex-wrap gap-[26px] sm:gap-[55px] mx-auto w-fit">
        <PopularServiceCard
          text-main="Терапевтична стоматологія"
          link="/services/ТЕРАПЕВТИЧНА%20СТОМАТОЛОГІЯ"
          ><img
            src="/img/mainpageServices/service1.jpg"
            class="absolute inset-0 w-full h-full object-cover"
            alt="service"
        /></PopularServiceCard>
        <PopularServiceCard text-main="Пародонтологія" link="/services/ПАРОДОНТОЛОГІЯ"
          ><img
            src="/img/mainpageServices/service2.webp"
            class="absolute inset-0 w-full h-full object-cover"
            alt="service"
        /></PopularServiceCard>
        <PopularServiceCard text-main="Дитяча стоматолоiя" link="/services/ДИТЯЧА%20СТОМАТОЛОГІЯ"
          ><img
            src="/img/mainpageServices/service3.webp"
            class="absolute inset-0 w-full h-full object-cover"
            alt="service"
        /></PopularServiceCard>
        <PopularServiceCard
          text-main="Ортопедична стоматологія"
          link="/services/ОРТОПЕДИЧНА%20СТОМАТОЛОГІЯ"
          ><img
            src="/img/mainpageServices/service4.webp"
            class="absolute inset-0 w-full h-full object-cover"
            alt="service"
        /></PopularServiceCard>
        <PopularServiceCard
          text-main="Невідкладна стоматологія"
          link="/services/НЕВІДКЛАДНА%20СТОМАТОЛОГІЯ"
          ><img
            src="/img/mainpageServices/service5.webp"
            class="absolute inset-0 w-full h-full object-cover"
            alt="service"
        /></PopularServiceCard>
      </div>
      <div class="w-fit mx-auto mt-[36px]">
        <NuxtLink to="/services/ТЕРАПЕВТИЧНА%20СТОМАТОЛОГІЯ">
          <ButtonLink button-text="Усі послуги"></ButtonLink>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import PopularServiceCard from '~/components/mainpage/popularServices/PopularServiceCard.vue';
import ButtonLink from '~/components/shared/ButtonLink.vue';
</script>
<style scoped></style>
