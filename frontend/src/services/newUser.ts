import { errorMessages } from '../constants/messages'
import { INewUser } from '../constants/types'
import { api } from './api'

export function newUser(credentials: INewUser): Promise<any> {
  const body = {
    email: credentials.email,
    password: credentials.password,
  }
  return new Promise((res, rej) => {
    api
      .post('auth/register', body)
      .then((response) => {
        res(response.data)
      })
      .catch((err) => {
        if (err.status === 401) {
          rej({
            ...err,
            message: errorMessages.ALREADY_REGISTER,
          })
        } else {
          rej(err)
        }
      })
  })
}
