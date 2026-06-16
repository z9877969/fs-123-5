import { RegisterLoginData, User } from '@/types/user';
import { nextServer } from './api';

export const login = async (loginData: RegisterLoginData) => {
  const { data } = await nextServer.post<User>(`/auth/login`, loginData);
  return data;
};
import { nextServer } from './api';
import { User } from '@/app/types/user';

export type UserRegisterProps = {
  email: string;
  password: string;
  username: string;
};

type RegisterResponse = {
  newUser: User;
};

export const register = async (data: UserRegisterProps): Promise<RegisterResponse> => {
  const res = await nextServer.post('/auth/register', data);
  return res.data;
};
