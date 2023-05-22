import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'sgg58wrl',
      dataset: 'production',
      apiVersion: '2023-05-21',
      useCdn: false,
    }),
  ],
});
