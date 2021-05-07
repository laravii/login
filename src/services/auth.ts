import { errorMessages } from '../constants/messages'
import { ICredentials } from '../constants/types'
import { api } from './api'

export function authenticate(credentials: ICredentials): Promise<any> {
  const body = {
    email: credentials.email,
    password: credentials.password,
  }
  return new Promise((res, rej) => {
    api
      .post('/auth/login', body)
      .then((response) => {
        res(response.data)
      })
      .catch((err) => {
        if (err.status === 401) {
          rej({
            ...err,
            message: errorMessages.WRONG_CREDENTIALS,
          })
        } else {
          rej(err)
        }
      })
  })
}
