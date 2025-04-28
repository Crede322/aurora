<template>
  <input
    ref="inputEl"
    type="text"
    class="flatpickr-input h-[50px] pl-[14px] flex items-center border-[1px] border-[#bfbfbf] rounded-[10px] text-[var(--color-main)] font-bold"
  />
</template>

<script setup>
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const time = ref(null);
const inputEl = ref(null);
let fpInstance = null;

onMounted(() => {
  fpInstance = flatpickr(inputEl.value, {
    enableTime: true,
    dateFormat: 'd-m-Y H:i',
    time_24hr: true,
    locale: Ukrainian,
    defaultDate: new Date(new Date().setHours(new Date().getHours() + 1)),
    onChange(selectedDates) {
      time.value = selectedDates[0];
    },
  });
});

onBeforeUnmount(() => {
  if (fpInstance) {
    fpInstance.destroy();
  }
});
</script>
