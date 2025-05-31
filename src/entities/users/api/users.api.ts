import { ACCESS_TOKEN } from '@/utils/const/consts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
    credentials: 'include',
    prepareHeaders: headers => {
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Users'],
  endpoints: build => ({
    getUser: build.query<any, any>({
      query: () => ({
        url: `/`,
      }),
      providesTags: ['Users'],
    }),
    postUser: build.mutation<any, any>({
      query: body => ({
        url: `/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

export const { useGetUserQuery, useLazyGetUserQuery, usePostUserMutation } = usersApi
