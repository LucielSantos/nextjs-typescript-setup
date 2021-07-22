import api from '../services/api';

interface IUser {
  id: string;
  name: string;
}

export const getUsers = () => api.get<IUser>('...');

interface ICreateUserData {
  name: string;
}

export const createUser = (data: ICreateUserData) => api.post<IUser>('...', data);
