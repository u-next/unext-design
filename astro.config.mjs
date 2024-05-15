import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://test.com",
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
