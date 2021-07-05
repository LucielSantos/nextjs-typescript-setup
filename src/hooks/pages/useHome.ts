import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/useAppSelector';
import * as HomeActions from '../../store/modules/home/actions';

export const useHome = () => {
  const { count } = useAppSelector(state => state.home);
  const dispatch = useDispatch();

  const addCount = useCallback(() => dispatch(HomeActions.addCount(count + 1)), [count]);

  return {
    addCount,
    count,
  };
};
