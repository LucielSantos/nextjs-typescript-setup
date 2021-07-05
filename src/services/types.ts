import { AxiosResponse } from 'axios';

export interface IRequestResponse<T = any> extends Promise<AxiosResponse<T>> {}
