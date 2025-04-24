import { IStatusResponse } from "@/entities/general/types/general"
import { IOrderDetail } from "@/entities/order/types/order"

export interface IProfile {
  id: number
  photo: string | null
  fullName: string | null
  companyName: string | null
  phoneNumber: string | null
  inn: string | null
  activeOrders: IOrderDetail[]
  historyOrders: IOrderDetail[]
}

export interface IMyProfile extends IProfile {
  activeOrders: IOrderDetail[]
  historyOrders: IOrderDetail[]
}


export interface IGetProfileResponse extends IStatusResponse {
  profile: IMyProfile
}