import { IPageRequest, IPageResponse, IStatusResponse } from "@/entities/general/types/general"

export interface IProduct {
  id: number
  article: string
  name: string
  price: number
  pricePerGram: number
  images: string[]
}

export interface IProductPhoto {
  id: number
  imagePath: string
}

export interface IProductVideo {
  id: number
  videoPath: string
}

export interface IProductDetail {
  id: number
  article: string
  name: string
  description: string
  price: number
  pricePerGram: number
  photos: IProductPhoto[]
  videos: IProductVideo[]
  recommendations: {
    id: number
    article: string
    name: string
    images: string[]
  }[]
}

export interface IGetProductsRequest extends IPageRequest {
  minPrice?: number
  maxPrice?: number
  brandIds?: number[]
  metal?: string
  stone?: string
  category?: string
}


export interface IGetProductsResponse extends IPageResponse {
  products: IProduct[]
}

export interface IGetProductResponse extends IStatusResponse {
  product: IProductDetail
}