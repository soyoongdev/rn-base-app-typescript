// Định nghĩa schema trên db

export type User = {
  userId: number // ID người dùng
  employeeCode: string // Mã nhân viên
  username: string // Tên đăng nhập
  fullName: string // Họ và tên
  email: string // Email
  phoneNumber: string // Số điện thoại (có thể null)
  role: string // Vai trò người dùng
  isActive: Boolean // Trạng thái kích hoạt
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
}
