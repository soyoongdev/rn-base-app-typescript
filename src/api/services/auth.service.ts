import {
  LoginInput,
  LoginSchema,
  RegisterInput,
  RegisterSchema,
} from '@/models/api/auth.model'
import { ResponseDataType } from '../api.types'
import apiClient from '../client'

const NAMESPACE = '/auth'

// Create new user (POST)
export const login = async (
  parameters: LoginInput,
): Promise<ResponseDataType<LoginSchema>> => {
  return await apiClient
    .post(`${NAMESPACE}`, parameters)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}

export const register = async (
  parameters: RegisterInput,
): Promise<ResponseDataType<RegisterSchema>> => {
  return await apiClient
    .post(`${NAMESPACE}/register`, parameters)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}
