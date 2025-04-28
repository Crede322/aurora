<template>
  <div id="contactForm" class="tw-container">
    <div
      class="flex mt-[0] md:mt-[75px] pb-[40px] flex-wrap gap-[20px] justify-center md:justify-between"
    >
      <!-- Форма ввода -->
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 mb-6 w-full">
        <fieldset class="relative min-h-[670px] max-h-[670px] h-[670px]">
          <div>
            <h3
              class="text-3xl md:text-5xl font-normal leading-[40px] md:leading-[60px] text-left w-full form-title"
            >
              Зв'яжіться з нами
            </h3>
            <h3
              class="max-w-full lg:max-w-[460px] mb-[40px] mt-[10px] text-[var(--color-textgray)] relative z-3"
            >
              безкоштовний зворотний дзвінок для обговорення деталей та запису на прийом
            </h3>
          </div>
          <!-- Список полей ввода -->
          <div class="flex gap-[30px]">
            <ul class="flex flex-col gap-4 w-full lg:w-[30%]">
              <!-- Name -->
              <li>
                <label for="name" class="text-sm font-medium text-gray-700">Ім'я</label>
                <div class="flex gap-[30px]">
                  <div class="w-full">
                    <input
                      type="text"
                      placeholder="Ваше ім'я"
                      v-model="formData.name"
                      class="border border-[#bfbfbf] rounded-[10px] w-full h-[50px] max-h-[150px] pl-[14px] cursor-text"
                      @blur="validateField('name')"
                    />
                    <p v-if="errors.name" class="text-red-500 text-xs mt-1">
                      {{ errors.name }}
                    </p>
                  </div>
                </div>
              </li>
              <!-- Phone -->
              <li>
                <label for="phone" class="text-sm font-medium text-gray-700">Телефон</label>
                <div class="relative flex items-center">
                  <input
                    type="text"
                    placeholder="(000) 000-00-00"
                    v-model="formData.phone"
                    @input="formatPhoneInput"
                    @blur="validateField('phone')"
                    class="border border-[#bfbfbf] rounded-[10px] w-full h-[50px] max-h-[150px] pl-[44px] cursor-text"
                  />
                  <h3 class="absolute left-[14px] text-[16px]">+38</h3>
                </div>
                <p v-if="errors.phone" class="text-red-500 text-xs mt-1">
                  {{ errors.phone }}
                </p>
              </li>

              <!-- Message -->
              <!-- <li class="w-full">
                <label for="date" class="text-sm font-medium text-gray-700">Час запису</label>
                <DatepickerTime class="w-full" />
              </li> -->
              <li>
                <label for="message" class="text-sm font-medium text-gray-700"
                  >Побажання або коментарі (опціонально)</label
                >
                <textarea
                  name="message"
                  v-model="formData.message"
                  class="w-full h-[200px] border-gray-400 border-[1px] pl-[15px] pr-[12px] pt-[12px] placeholder:text-gray-400 placeholder:opacity-80 overflow-hidden resize-none bg-transparent rounded-[10px]"
                  placeholder="Особливі побажання"
                  @blur="validateField('message')"
                ></textarea>
              </li>
              <ButtonLink @click="handleSubmit" button-text="Залишити заявку" class="text-nowrap" />
            </ul>
            <img
              src="/img/formBg.webp"
              alt="contact us form background"
              class="hidden lg:block rounded-[10px] absolute w-[55%] right-0 top-0 object-cover h-[100%] z-1"
            />
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import Datepicker from '~/components/shared/Datepicker.vue';
import DatepickerTime from '~/components/shared/DatepickerTime.vue';
import ButtonLink from '~/components/shared/ButtonLink.vue';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const formData = ref<FormData>({
  name: '',
  phone: '',
  message: '',
});

const errors = ref<{ name?: string; phone?: string; message?: string }>({});

// ✅ Функция валидации телефона
const validatePhone = (phone: string): string | null => {
  const phonePattern = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  if (!phone) return 'Вкажіть контактний номер';
  if (!phonePattern.test(phone)) return 'Невірний формат номера (наприклад, (097) 766-56-11)';
  return null;
};

// ✅ Автоформатирование ввода номера
const formatPhoneInput = () => {
  let value = formData.value.phone.replace(/\D/g, ''); // Убираем всё, кроме цифр

  if (value.length > 10) value = value.slice(0, 10); // максимум 10 цифр (без +38)

  if (value.length < 4) {
    formData.value.phone = value;
  } else if (value.length < 7) {
    formData.value.phone = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  } else if (value.length < 9) {
    formData.value.phone = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  } else {
    formData.value.phone = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(
      6,
      8
    )}-${value.slice(8, 10)}`;
  }
};

// ✅ Универсальная функция валидации полей
const validateField = (field: keyof FormData) => {
  if (field === 'name') {
    errors.value.name = formData.value.name.trim() ? undefined : "Вкажіть ваше ім'я";
  } else if (field === 'phone') {
    errors.value.phone = validatePhone(formData.value.phone) || undefined;
  }
};

// ✅ Валидация перед отправкой формы
const handleSubmit = () => {
  validateField('name');
  validateField('phone');

  if (!errors.value.name && !errors.value.phone && !errors.value.message) {
    sendForm();
  } else {
    console.log(errors.value);
  }
};

const sendForm = async () => {
  try {
    await $fetch('/api/send-message', {
      method: 'POST',
      body: formData.value,
    });
    alert('Мы с вами свяжемся');
  } catch (e) {
    alert('ошибка отправки');
  }
};
</script>
