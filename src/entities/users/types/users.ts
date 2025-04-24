import { UserStatus } from "@/entities/general/types/general.enum"

export interface IUser {
  id: number
  status: UserStatus
  accessToken: string
  refreshToken: string
}