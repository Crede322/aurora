import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/common.css'],
  modules: ['@pinia/nuxt'],
  ssr: false,
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3,wght@0,200..900;1,200..900&display=swap',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      title: 'стоматологія Aurora',
      meta: [
        { name: 'description', content: 'Стоматологічна клініка Aurora' },
        {
          name: 'keywords',
          content:
            'Стоматологія, Стоматологічна клініка,Стоматологічна клініка Aurora,зубна клініка Aurora, Зубна клініка Київ, Aurora Київ',
        },
      ],
    },
  },
});
