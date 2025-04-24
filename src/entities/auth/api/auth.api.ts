import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/users`,
    credentials: 'include',
    prepareHeaders: headers => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    login: build.query<any, any>({
      query: () => ({
        url: `/loginByInitData`,
      }),
    }),
  }),
})

export const {  } = authApi
