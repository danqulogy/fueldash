export interface UserInListDto{
  _id?: string

  isVerified: boolean
  isActivated: boolean
  active: boolean
  displayName: string
  employeeId: string
  email: string
  password?: string
  roleId?: string
  role: RoleDto

  createdAt: string
  updatedAt: string
}

export interface RoleDto {
  _id: string
  name: string
  cardinality: number
  defaultApp: string
  allowedClientApps: string[]
  permissions: string[]
  active?: boolean
}

export interface IAuthCredentials {
  strategy: string
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  user: UserInListDto
}
