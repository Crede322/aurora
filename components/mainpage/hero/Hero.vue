<template>
  <div class="wrapper__hero relative mx-auto h-[78vh] max-h-[600px]">
    <div class="swiper flex flex-col max-w-[1340px] mx-auto h-full">
      <transition name="fade" mode="out-in">
        <HeroSwiperSlide
          v-if="!toggleSlide"
          text-main='Стоматологическая клиника "Aurora"'
          text-secondary="Получите консультацию"
          img-main="footage1"
        />
        <HeroSwiperSlide
          v-else
          text-main="Второй слайд"
          text-secondary="Получите консультацию второй слайд"
          img-main="footage2"
        />
      </transition>
      <!-- пагинация -->
      <div class="pagination flex gap-[8px] mx-auto pb-[20px] w-fit">
        <div
          class="w-[10px] h-[10px] rounded-full bg-[var(--color-main)]"
          :class="{ 'opacity-50': toggleSlide }"
        ></div>
        <div
          class="w-[10px] h-[10px] rounded-full bg-[var(--color-main)]"
          :class="{ 'opacity-50': !toggleSlide }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import HeroSwiperSlide from '~/components/mainpage/hero/HeroSwiperSlide.vue';

const toggleSlide = ref(false);

onMounted(() => {
  setInterval(() => {
    toggleSlide.value = !toggleSlide.value;
    console.log(toggleSlide.value);
  }, 7000);
});
</script>
<style scoped>
.wrapper__hero {
  position: relative;
  z-index: 0;
}

.wrapper__hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/img/mainBg.webp');
  background-size: cover;
  background-position: center;
  opacity: 0.25;
  z-index: -1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pagination__indicator {
}

.pagination__indicator_inactive {
}
</style>
