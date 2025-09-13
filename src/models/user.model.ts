// Định nghĩa schema trên db

export type User = {
  userId: number // ID người dùng
  employeeCode: string // Mã nhân viên
  username: string // Tên đăng nhập
  fullName: string // Họ và tên
  phoneNumber: string // Số điện thoại (có thể undefined)
  email: string // Email
  role: string // Vai trò người dùng
  isActive: boolean // Trạng thái hoạt động
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
}
