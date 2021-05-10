export interface ICredentials {
  email: string
  password: string
}
export interface INewUser extends ICredentials {
  confirmPassword: string
}
