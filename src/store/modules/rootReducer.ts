import { combineReducers } from 'redux';

import { IApplicationState } from '..';

import home, { HOME_INITIAL_STATE } from './home/reducer';

export default combineReducers({
  home,
});

export const rootInitialState: IApplicationState = {
  home: HOME_INITIAL_STATE,
};
