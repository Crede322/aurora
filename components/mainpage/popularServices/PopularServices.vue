<template>
  <div class="tw-container">
    <div class="grid grid-cols-3 gap-[55px]">
      <PopularServiceCard text-main="Лечение зубов"
        ><img src="/img/mainpageServices/servicePicture1.jpg" alt="service"
      /></PopularServiceCard>
      <PopularServiceCard text-main="Лечение зубов"
        ><img src="/img/mainpageServices/servicePicture1.jpg" alt="service"
      /></PopularServiceCard>
      <PopularServiceCard text-main="Лечение зубов"
        ><img src="/img/mainpageServices/servicePicture1.jpg" alt="service"
      /></PopularServiceCard>
      <PopularServiceCard text-main="Лечение зубов"
        ><img src="/img/mainpageServices/servicePicture1.jpg" alt="service"
      /></PopularServiceCard>
      <PopularServiceCard text-main="Лечение зубов"
        ><img src="/img/mainpageServices/servicePicture1.jpg" alt="service"
      /></PopularServiceCard>
      <PopularServiceCard text-main="Лечение зубов"
        ><img src="/img/mainpageServices/servicePicture1.jpg" alt="service"
      /></PopularServiceCard>
    </div>
    <UiButtonLink button-text="Все услуги" class="mx-auto mt-[70px] mb-[40px]" />
  </div>
</template>
<script setup lang="ts">
import PopularServiceCard from '~/components/mainpage/popularServices/PopularServiceCard.vue';
</script>
<style scoped></style>
