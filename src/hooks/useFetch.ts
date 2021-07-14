import useSWR, { SWRConfiguration } from 'swr';
import api from '../services/api';

export function useFetch<Data = any, Error = any>(url: string, swrConfig?: SWRConfiguration) {
  const { data, error, mutate, isValidating, revalidate } = useSWR<Data, Error>(
    url,
    async url => {
      const response = await api.get(url);

      return response.data;
    },
    swrConfig,
  );

  return { data, error, mutate, isValidating, revalidate };
}
