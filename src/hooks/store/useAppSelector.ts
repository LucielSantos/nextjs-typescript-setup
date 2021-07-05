import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IApplicationState } from '../../store';

export const useAppSelector: TypedUseSelectorHook<IApplicationState> = useSelector;
