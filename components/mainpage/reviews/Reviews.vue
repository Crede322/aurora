<template>
  <div id="reviews" class="tw-container">
    <h2 class="tw-heading mx-auto w-fit mb-[40px] md:mb-[80px]">Відгуки наших клієнтів</h2>
    <swiper :loop="true">
      <swiper-slide>
        <Slide
          reviewer-name="Ирина"
          text-main="Працюю недалеко від цієї клініки, якось випадково зайшла, дуже вразило те що консультація безкоштовна, що зараз зустрічається дуже рідко і ціни дуже приємні. Всі зуби полікували, залишилась задоволена! Окреме дякую головному лікареві Олені Леонідівні, дуже приємна людина і мастер своєї справи."
        >
        </Slide
      ></swiper-slide>
      <swiper-slide>
        <Slide
          reviewer-name="Катя"
          text-main="Знаю цю клініку давно, вся наша сім'я ходить лікуватися, завжди приємно зустрічають, лікарі доброзичливі, завжди допоможуть і дадуть відповідь на будь-яке запитання. Рекомендую всім, хто ще не приходьте - не пошкодуєте!"
        >
        </Slide
      ></swiper-slide>
      <swiper-slide>
        <Slide
          reviewer-name="Юлианна"
          text-main="Лечили зубы как-то нашему сыну, ему 4 года, это было первое знакомство с доктором, сын закатал истерику, так как очень боялся, доктор Лиана Андреевна очень быстро нашла подход, зубы полечили ещё и подарок получил. Теперь это наше любимое место, хоть мы уже и всё сделали!"
        >
        </Slide
      ></swiper-slide>
      <swiper-slide>
        <Slide
          reviewer-name="Владимир"
          text-main="Атмосфера клиники очень приятная, обстановка способствует лечению. Приятный персонал и великолепный подход к пациенту или клиенту, Вам лучше знать. Огромное спасибо вам за труд!"
        >
        </Slide
      ></swiper-slide>
      <swiper-slide>
        <Slide
          reviewer-name="Михаил"
          text-main="Хочу сказать большое спасибо врачам которые работают в этой клинике. Мы с женой лечимся тут уже больше 5 лет, и за это все время не было никаких проблем!"
        >
        </Slide
      ></swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import Slide from '~/components/mainpage/reviews/ReviewsSlide.vue';
</script>
<style scoped></style>
