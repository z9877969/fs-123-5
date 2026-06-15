export type User = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface RegisterLoginData {
  email: string;
  password: string;
}
