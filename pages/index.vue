<template>
  <div>
    <Hero />
    <WhyUs />
    <MainpagePopularServices />
    <MainpageResults />
    <Reviews />
  </div>
</template>
<script setup lang="ts">
import Hero from '~/components/mainpage/hero/Hero.vue';
import WhyUs from '~/components/mainpage/whyUs/WhyUs.vue';
import Reviews from '~/components/mainpage/reviews/Reviews.vue';
</script>
<style>
.container {
  max-width: 90vw;
}
</style>
