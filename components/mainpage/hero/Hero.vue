<template>
  <div class="wrapper__hero relative mx-auto h-[78vh] max-h-[600px]">
    <div class="swiper flex flex-col max-w-[1340px] mx-auto h-full">
      <transition name="fade" mode="out-in">
        <HeroSwiperSlide v-if="!toggleSlide" img-main="footage1">
          <h1 class="text-[clamp(24px,6vw,36px)] text-[var(--color-main)] font-bold relative z-3">
            Стоматологічна клініка "Aurora"
          </h1>
          <h3 class="tw-text-thin z-3 relative max-w-[480px]">
            Отримайте консультацію прямо зараз:
            <span class="text-[var(--color-accent)] text-nowrap">+ 38 (066) 517-1324</span>
            чи замовте дзвінок і ми зв'яжемося з вами найближчим часом
          </h3>
        </HeroSwiperSlide>
        <HeroSwiperSlide v-else img-main="footage2">
          <h1 class="text-[clamp(24px,6vw,36px)] text-[var(--color-main)] font-bold relative z-3">
            Стоматологічна клініка "Aurora"
          </h1>
          <h3 class="tw-text-thin z-3 relative max-w-[480px]">
            Отримайте консультацію прямо зараз:
            <span class="text-[var(--color-accent)]">+ 38 (066) 517-1324</span> чи замовте дзвінок і
            ми зв'яжемося з вами найближчим часом
          </h3>
        </HeroSwiperSlide>
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

@media (max-width: 1400px) {
  .wrapper__hero {
    max-width: 96vw;
  }
}
</style>
