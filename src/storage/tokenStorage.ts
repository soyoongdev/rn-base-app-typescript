// src/storage/token.ts
import { MMKV } from 'react-native-mmkv'

const DEFAULT_TOKEN_KEY = 'token' //Lưu trong MMKV

const storage = new MMKV()

export const tokenStorage = {
  getToken: () => storage.getString(DEFAULT_TOKEN_KEY) ?? null,
  setToken: (token: string) => storage.set(DEFAULT_TOKEN_KEY, token),
  clearToken: () => storage.delete(DEFAULT_TOKEN_KEY),
}
