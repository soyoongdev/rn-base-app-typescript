import { LoginInput, RegisterInput } from '@/models/auth.model'
import { tokenStorage } from '@/storage/tokenStorage'

import apiClient from '../client'
import { AuthResponseDataType, ResponseDataType } from '../types'

const NAMESPACE = '/auth'

// Create new user (POST)
export const login = async (
  parameters: LoginInput,
): Promise<ResponseDataType<AuthResponseDataType>> => {
  return await apiClient
    .post<ResponseDataType<AuthResponseDataType>>(NAMESPACE, parameters)
    .then((response) => {
      const data = response.data.data
      // Sau khi login thành công
      // Lưu token vào storage
      if (data?.token) tokenStorage.setToken(data?.token)
      return response.data
    })
    .catch((error) => {
      throw error
    })
    .finally(() => {
      // console.log('done')
    })
}

// Create new user (POST)
export const logout = async (): Promise<ResponseDataType<string>> => {
  return await apiClient
    .post<ResponseDataType<string>>(`${NAMESPACE}/logout`)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      throw error
    })
    .finally(() => {
      // console.log('done')
    })
}

export const register = async (
  parameters: RegisterInput,
): Promise<ResponseDataType<AuthResponseDataType>> => {
  return await apiClient
    .post<ResponseDataType<AuthResponseDataType>>(
      `${NAMESPACE}/register`,
      parameters,
    )
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      throw error
    })
    .finally(() => {
      // console.log('done')
    })
}

export const verifyToken = async (
  token: string,
): Promise<ResponseDataType<AuthResponseDataType>> => {
  return await apiClient
    .post<ResponseDataType<AuthResponseDataType>>(
      `${NAMESPACE}/verify-token`,
      token,
    )
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      throw error
    })
    .finally(() => {
      // console.log('done')
    })
}
