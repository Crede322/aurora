<template>
  <button v-if="showScrollButton" @click="scrollToTop" class="button__scroll z-10">
    <img src="/img/scroll-arrow2.svg" alt="scroll arrow" />
  </button>
</template>
<script setup>
const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 1200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style>
.button__scroll {
  display: none;
  position: fixed;
  width: 17vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  right: 3vw;
  bottom: 3vh;
  border: 2px solid #1c7b98;
  justify-content: center;
  align-items: center;
}

.button__scroll img {
  rotate: -90deg;
  border-radius: 50%;
  width: 60%;
  height: auto;
  margin: auto;
}

@media (max-width: 760px) {
  .button__scroll {
    display: flex;
  }
}
</style>
