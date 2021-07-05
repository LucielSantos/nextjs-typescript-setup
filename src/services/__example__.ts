import api from './api';
import { IRequestResponse } from './types';

interface IUser {
  id: string;
  name: string;
}

export const getUsers = (): IRequestResponse<IUser> => api.get('...');

interface ICreateUserReq {
  (data: { name: string }): IRequestResponse<IUser>;
}

export const createUser: ICreateUserReq = data => api.post('...', data);
