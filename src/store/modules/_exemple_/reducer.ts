import { Reducer } from 'redux';

import { IHomeState, EHomeActionTypes } from './types';

export const HOME_INITIAL_STATE: IHomeState = {
  count: 0,
};

const homeReducer: Reducer<IHomeState> = (state = HOME_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EHomeActionTypes.ADD_COUNT:
      return {
        ...state,
        count: payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
