<template>
  <div>
    <Hero />
    <WhyUs />
    <MainpagePopularServices />
    <MainpageResults />
    <Reviews />
    <ContactForm />
  </div>
</template>
<script setup lang="ts">
import Hero from '~/components/mainpage/hero/Hero.vue';
import WhyUs from '~/components/mainpage/whyUs/WhyUs.vue';
import Reviews from '~/components/mainpage/reviews/Reviews.vue';
import ContactForm from '~/components/shared/ContactForm.vue';
import Contacts from '~/components/shared/Contacts.vue';
</script>
<style>
.container {
  max-width: 90vw;
}
</style>
