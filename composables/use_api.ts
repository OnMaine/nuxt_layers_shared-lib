import {
    useAsyncData,
    useNuxtApp,
  } from '#app';
  import type { FetchError } from 'ofetch';
  
  interface Options {
    composableOptions?: object;
    [key: string]: any;
  }
  
  interface Params {
    requestUrl: string;
    options?: Options;
    headers?: HeadersInit;
    key?: string;
  }
  
  export const useApi = <T>({
    requestUrl = '',
    options = {},
    headers,
  }: Params) => {
    const { $api } = useNuxtApp();
  
    const { composableOptions , ...apiOptions } = options;
  
    return useAsyncData<T, FetchError | null>(
      options.key || requestUrl.replaceAll('/', ''),
      () => $api<T>(requestUrl, {
        ...apiOptions,
        headers,
      }),
      composableOptions,
    );
  };
  