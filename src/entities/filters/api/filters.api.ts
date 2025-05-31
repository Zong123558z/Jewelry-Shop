import { ACCESS_TOKEN } from '@/utils/const/consts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetFiltersResponse } from '../types/filters'

export const filtersApi = createApi({
  reducerPath: 'filtersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/filters`,
    // credentials: 'include',
    prepareHeaders: headers => {
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Filters'],
  endpoints: build => ({
    getFilters: build.query<IGetFiltersResponse, void>({
      query: () => ({
        url: `/`,
      }),
    }),
  }),
})

export const { useGetFiltersQuery } = filtersApi
