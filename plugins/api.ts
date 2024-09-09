import { ofetch } from 'ofetch';

export default defineNuxtPlugin(nuxtApp => {

  const apiFetch = ofetch.create({
    async onRequest({ options }) {


      options.headers = {
        ...options.headers,
        'Custom header': 'header from lib',
      } as HeadersInit;
    },
  });

  return {
    provide: {
      api: apiFetch,
    },
  };
});
