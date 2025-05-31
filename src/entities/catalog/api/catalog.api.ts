import { ACCESS_TOKEN } from '@/utils/const/consts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  IGetProductResponse,
  IGetProductsRequest,
  IGetProductsResponse,
  IParsedProductsRequest,
} from '../types/catalog'

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/catalog`,
    // credentials: 'include',
    prepareHeaders: headers => {
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
    paramsSerializer: params => {
      const searchParams = new URLSearchParams()
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(v => {
            if (v != null) searchParams.append(key, v.toString())
          })
        } else if (value != null) {
          searchParams.append(key, value.toString())
        }
      })
      return searchParams.toString()
    },
  }),
  tagTypes: ['Catalog'],
  endpoints: build => ({
    getProducts: build.query<IGetProductsResponse, IGetProductsRequest>({
      query: params => {
        const parsedParams: IParsedProductsRequest = { page: params.page, limit: params.limit, q: params.q }
        if (params.brandIds?.length) parsedParams.brand_ids = params.brandIds
        if (params.stoneIds?.length) parsedParams.stone_ids = params.stoneIds
        if (params.productTypeId != null) parsedParams.product_type_id = params.productTypeId
        return {
          url: `/`,
          params: parsedParams,
        }
      },
    }),
    getProduct: build.query<IGetProductResponse, { id: number }>({
      query: ({ id }) => ({
        url: `/${id}`,
      }),
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery } = catalogApi
