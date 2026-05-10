import { defineConfig } from 'astro/config';

export default defineConfig({
  // Remplace par ton domaine (ex: https://www.tonsite.com)
  // Ou par ton URL github : https://pseudo.github.io
  site: 'https://www.dogwalkeuse.com',
  // Si le site est à la racine du domaine, laisse '/'
  base: '/',
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
});