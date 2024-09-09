import { ofetch } from 'ofetch';

export default defineNuxtPlugin(nuxtApp => {

const $customFetch = $fetch.create({
    async onRequest({ options }) {

      options.headers = {
        ...options.headers,
        'Custom': 'header from lib',
      } as HeadersInit;
    },
  });

  return {
    provide: {
      customFetch: $customFetch
    },
  };
});
