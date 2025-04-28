<template>
  <div class="tw-container container__service">
    <div class="flex-col md:flex-row flex items-center justify-center mx-auto">
      <button
        v-for="(serviceClass, index) of serviceNamesRaw"
        @click="toggleService = serviceClass"
        class="button__service w-full md:w-[200px] h-[50px] md:h-[80px] text-[var(--color-textgray)] text-[14px] py-[10px] px-[14px] border-l-[1px] border-t-[1px] border-b-[1px] border-[var(--color-main)]"
        :class="{ 'bg-[var(--color-main)] text-white': toggleService === serviceClass }"
        :key="index"
      >
        {{ serviceClass }}
      </button>
    </div>
    <div class="flex flex-col py-[24px]">
      <Service
        v-for="([name, value], index) in serviceNames"
        :key="index"
        :name="name"
        :value="value"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import serviceNamesRaw from '~/assets/serviceNames.json';
import rawServiceList from '~/assets/listOfServices.json';
import Service from '~/components/services/Service.vue';
import { useRoute } from 'vue-router';

const serviceList = rawServiceList as Record<string, Record<string, string>>;

const route = useRoute();

const toggleService = ref<string>('ТЕРАПЕВТИЧНА СТОМАТОЛОГІЯ');

// По умолчанию выбрана первая кнопка
const defaultService = serviceNamesRaw[0];

const serviceNames = computed(() => {
  return Object.entries(serviceList[toggleService.value]);
});

// При загрузке страницы
watchEffect(() => {
  const serviceId = route.params.serviceId as string;
  if (serviceId && serviceNamesRaw.includes(serviceId)) {
    toggleService.value = serviceId;
  } else {
    toggleService.value = defaultService;
  }
});
</script>
<style scoped>
.button__service:first-child {
  border-radius: 8px 0 0 8px;
}

.button__service:last-child {
  border-right: 1px solid var(--color-main);
  border-radius: 0 8px 8px 0;
}

@media (max-width: 768px) {
  .button__service {
    border-bottom: none;
    border-right: 1px solid var(--color-main);
  }

  .button__service:first-child {
    border-radius: 8px 8px 0 0;
  }

  .button__service:last-child {
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid var(--color-main);
  }

  .container__service {
    margin-top: 10px;
    padding-top: 50px;
  }
}
</style>
