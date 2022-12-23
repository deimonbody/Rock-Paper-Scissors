export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister extends ILogin {
  name: string;
}
export interface IUser {
  email: string;
  name: string;
  uid: string;
}
export interface IProtectedRoute {
  children: JSX.Element;
  isAuth: boolean;
}
