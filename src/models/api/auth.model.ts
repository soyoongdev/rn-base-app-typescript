export type LoginSchema = {
  username: string
  password: string
  cookie: string
  token: string
}

export type LoginInput = {
  username: string
  password: string
}

export type RegisterSchema = {
  username: string
  password: string
  email: string
}

export type RegisterInput = {
  username: string
  password: string
  email: string
}