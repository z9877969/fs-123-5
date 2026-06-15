import { RegisterLoginData, User } from '@/types/user';
import { nextServer } from './api';

export const login = async (loginData: RegisterLoginData) => {
  const { data } = await nextServer.post<User>(`/auth/login`, loginData);
  return data;
};
