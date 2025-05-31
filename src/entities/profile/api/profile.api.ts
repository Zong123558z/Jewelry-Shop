import { ACCESS_TOKEN } from '@/utils/const/consts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetProfileResponse } from '../types/profile'

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/users/profile`,
    // credentials: 'include',
    prepareHeaders: headers => {
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Profile'],
  endpoints: build => ({
    getProfile: build.query<IGetProfileResponse, void>({
      query: () => ({
        url: ``,
      }),
    }),
  }),
})

export const { useGetProfileQuery } = profileApi
