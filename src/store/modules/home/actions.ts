import { EHomeActionTypes } from './types';

export const addList = (count: number) => ({
  type: EHomeActionTypes.ADD_COUNT,
  payload: count,
});
