// src/api/services/posts.service.ts
import { User } from '@/models/api/user.model'
import { RequestDataType, ResponseDataType } from '../api.types'
import apiClient from '../client'

const NAMESPACE = '/users'

// Create new user (POST)
export const createUser = async (
  newItem: User,
): Promise<ResponseDataType<User>> => {
  return await apiClient
    .post(`${NAMESPACE}`, newItem)
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

// Get user by id (GET)
export const getUserById = async (
  id: number,
): Promise<ResponseDataType<User>> => {
  return await apiClient
    .get(`${NAMESPACE}?id=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}

// Get user by employeeCode (GET)
export const getUserByCode = async (
  code: string,
): Promise<ResponseDataType<User>> => {
  return await apiClient
    .get(`${NAMESPACE}?code=${code}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}

// Get all user with parameters (POST)
export const getAllUsers = async (
  parameters: RequestDataType,
): Promise<ResponseDataType<User[]>> => {
  return await apiClient
    .post(`${NAMESPACE}`, parameters)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}

// Partial update user by id (PATCH)
export const partialUpdateUserById = async (
  id: number,
  newItem: User,
): Promise<ResponseDataType<User>> => {
  return await apiClient
    .patch(`${NAMESPACE}?id=${id}`, newItem)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}

// Partial update user by employeeCode (PATCH)
export const partialUpdateUserByCode = async (
  code: string,
  newItem: User,
): Promise<ResponseDataType<User>> => {
  return await apiClient
    .patch(`${NAMESPACE}?code=${code}`, newItem)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}

// Update record user by id (PUT)
export const updateRecordUserById = async (
  id: number,
  newItem: User,
): Promise<ResponseDataType<User>> => {
  return await apiClient
    .put(`${NAMESPACE}?id=${id}`, newItem)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}

// Update record user by code (PUT)
export const updateRecordUserByCode = async (
  code: string,
  newItem: User,
): Promise<ResponseDataType<User>> => {
  return await apiClient
    .put(`${NAMESPACE}?code=${code}`, newItem)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
    .finally(() => {
      // console.log('done')
    })
}
