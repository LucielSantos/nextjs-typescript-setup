import { SWRInfiniteConfiguration, useSWRInfinite } from 'swr';
import api from '../services/api';

interface IGetKey<T> {
  /**
   * @description Function to get data, is executed on render and use setSize.
   * @param pageIndex The current index to get data.
   * @param previousPageData The previous request data.
   * @returns If return `null`, not execute request, if return `string`, do request based on returned string.
   */
  (pageIndex: number, previousPageData: T): null | string;
}

export function useInfinityFetch<TData = any, Error = any>(
  getKey: IGetKey<TData>,
  swrConfig?: SWRInfiniteConfiguration,
) {
  const { ...props } = useSWRInfinite<TData, Error>(
    getKey,
    async url => {
      const response = await api.get(url);

      return response.data;
    },
    swrConfig,
  );

  return props;
}
