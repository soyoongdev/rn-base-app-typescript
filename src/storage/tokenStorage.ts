// src/storage/token.ts
import { MMKV } from 'react-native-mmkv'

const DEFAULT_TOKEN_KEY = 'token' //Lưu trong MMKV

const storage = new MMKV()

export const tokenStorage = {
  clearToken: () => { storage.delete(DEFAULT_TOKEN_KEY); },
  getToken: () => storage.getString(DEFAULT_TOKEN_KEY) ?? undefined,
  setToken: (token: string) => { storage.set(DEFAULT_TOKEN_KEY, token); },
}
