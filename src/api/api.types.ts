// src/types/api.d.ts

export type ItemStatusType =
  | 'draft'
  | 'active'
  | 'closed'
  | 'archived'
  | 'deleted'

// Filter type
export type FilterType = {
  status?: ItemStatusType[] // status: ['active', 'archived', ...]
  field?: string // ex: 'id'
  items: number[] // ex: [111, 222, 333] or [-1] to get all items
}

// Paginator type
export type PaginatorType = { page?: number; pageSize?: number }

// Search type
export type SearchType = {
  field?: string // ex: 'id'
  term?: string // ex: '123' or '' to get all items
}

// Sorting type
export type SortingType = {
  column?: string // ex: 'id'
  direction?: string // direction: asc|desc sắp xếp trước sau
}

// Base response data type
export type ResponseDataType<T> = {
  success: boolean // Status of response (ex: true | false)
  message: string // Message from server (ex: "Fetch data successfully")
  errorCode?: string // Error code if any (ex: "INVALID_TOKEN") ~ Mã nhận diện lỗi nếu có
  data?: T // Payload (dữ liệu trả về) of response (ex: array of items, object item, etc.)
  length?: number // Length of items/page (ex: 20 items)
  page?: number // Current page number (ex: 1 page)
  pageSize?: number // Items per page (ex: 5 pages)
  total?: number // Total items in all pages (ex: 100 items)
}

// base request body data type
export type RequestDataType = {
  filter: FilterType
  paginator: PaginatorType
  search: SearchType
  sorting: SortingType
}
