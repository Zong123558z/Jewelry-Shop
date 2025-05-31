import { ACCESS_TOKEN } from '@/utils/const/consts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILoginByInitDataResponse, IRegisterRequest, IRegisterResponse } from '../types/auth'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
    // credentials: 'include',
    prepareHeaders: headers => {
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    loginByInitData: build.mutation<ILoginByInitDataResponse, { init_data: string }>({
      query: ({ init_data }) => {
        const formData = new URLSearchParams()

        formData.append('init_data', init_data)

        return {
          url: '/loginByInitData',
          method: 'POST',
          body: formData,
        }
      },
    }),
    register: build.mutation<IRegisterResponse, IRegisterRequest>({
      query: body => ({
        url: `/register`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginByInitDataMutation, useRegisterMutation } = authApi
