import { EHomeActionTypes } from './types';

export const addCount = (count: number) => ({
  type: EHomeActionTypes.ADD_COUNT,
  payload: count,
});
