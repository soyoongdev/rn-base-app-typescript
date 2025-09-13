import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { LoginInput, RegisterInput } from '@/models/auth.model'

import { tokenStorage } from '@/storage/tokenStorage'
import { DEFAULT_QUERY_AUTH_KEY } from '@/utils/constants'
import { authService } from '../services'
import { DEFAULT_QUERY_USER_KEY } from './useUser'

export default function useAuth() {
  const queryClient = useQueryClient()

  // Check if user is authenticated
  const { data: authenticated, refetch: checkAuth } = useQuery({
    queryKey: [DEFAULT_QUERY_AUTH_KEY],
    queryFn: async () => {
      const token = tokenStorage.getToken()

      // Nếu không có token hoặc token rỗng, trả về false
      if (!token || token.trim() === '') {
        return false
      }

      try {
        // Gọi API để kiểm tra token có hợp lệ hay không
        const response = await authService.verifyToken(token)
        return response?.data?.valid || false // Trả về true nếu token hợp lệ
      } catch (error) {
        // Nếu API trả lỗi, coi như token không hợp lệ
        return false
      }
    },
    initialData: false, // Mặc định là chưa đăng nhập
    staleTime: Infinity, // Dữ liệu không bao giờ bị lỗi thời
  })

  // Login (POST)
  const login = (parameters: LoginInput) => {
    return useMutation({
      mutationFn: async () => authService.login(parameters),
      onSuccess: async (data) => {
        const token = data.data?.token
        if (token != undefined && token !== '') {
          // Lưu token vào storage
          tokenStorage.setToken(token)
          // Cập nhật trạng thái authenticated
          queryClient.setQueryData([DEFAULT_QUERY_AUTH_KEY], true)
          // Lưu thông tin user vào cache sau khi đăng nhập (đỡ phải gọi API lấy user nữa)
          queryClient.setQueryData([DEFAULT_QUERY_USER_KEY], data.data)
        }
        return data
      },
    })
  }

  // Logout (POST)
  const logout = () => {
    return useMutation({
      mutationFn: async () => authService.logout(),
      onSuccess: async () => {
        // Xóa token khỏi storage
        tokenStorage.clearToken()
        // Cập nhật trạng thái authenticated
        queryClient.setQueryData([DEFAULT_QUERY_AUTH_KEY], false)
        // Xóa cache user
        queryClient.removeQueries({ queryKey: [DEFAULT_QUERY_USER_KEY] })
      },
    })
  }

  // Register (POST)
  const register = (parameters: RegisterInput) => {
    return useMutation({
      mutationFn: async () => authService.register(parameters),
      onSuccess: async (data) => {
        const token = data.data?.token
        if (token != undefined && token !== '') {
          // Lưu token vào storage
          tokenStorage.setToken(token)
          // Cập nhật trạng thái authenticated
          queryClient.setQueryData([DEFAULT_QUERY_AUTH_KEY], true) 
        }
        if (data.data != undefined) {
          queryClient.setQueryData([DEFAULT_QUERY_USER_KEY], data.data) // Lưu thông tin user vào cache
        }
      },
    })
  }

  return {
    authenticated, // Trạng thái đăng nhập
    checkAuth, // Hàm để kiểm tra lại trạng thái đăng nhập
    login,
    logout,
    register,
  }
}
