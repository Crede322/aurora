// stores/dateStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDateStore = defineStore('date', () => {
  const current = new Date();
  current.setHours(current.getHours() + 1);

  const time = ref(current);

  return { time };
});
