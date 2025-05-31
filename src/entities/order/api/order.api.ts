import { ACCESS_TOKEN } from '@/utils/const/consts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICreateOrderRequest, ICreateOrderResponse } from '../types/order'

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/orders`,
    // credentials: 'include',
    prepareHeaders: headers => {
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Order'],
  endpoints: build => ({
    createOrder: build.mutation<ICreateOrderResponse, ICreateOrderRequest>({
      query: body => ({
        url: `/`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useCreateOrderMutation } = orderApi
