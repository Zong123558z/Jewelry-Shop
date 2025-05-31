import { IStatusResponse } from '@/entities/general/types/general'
import { IProfile } from '@/entities/profile/types/profile'
import { IUser } from '@/entities/users/types/users'

export interface ILoginByInitDataResponse extends IStatusResponse {
  user: IUser
}

export interface IRegisterRequest extends Omit<IProfile, 'id' | 'photo' | 'activeOrders' | 'historyOrders'> {}

export interface IRegisterResponse extends IStatusResponse {
  profile: IProfile
}
