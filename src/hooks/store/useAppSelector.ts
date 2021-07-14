import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IApplicationState } from '../../store';

/**
 * Typescript abstraction to get typed application state
 */
export const useAppSelector: TypedUseSelectorHook<IApplicationState> = useSelector;
