import { useApi } from '@/composables';

export const recentDeals = (
  options?: object,
) => {
  return useApi({
    requestUrl: '/test2',
    options,
  });
};
