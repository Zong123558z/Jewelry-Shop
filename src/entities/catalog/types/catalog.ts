import { IPageRequest, IPageResponse, IStatusResponse } from '@/entities/general/types/general'

export interface IProduct {
  id: number
  article: string
  name: string
  price: number
  pricePerGram: number
  images: string[]
}
export interface IBasketItem {
  product: IProductDetail
  amount: number
  isDeleted: boolean
  size: ISize
}

export interface IProductPhoto {
  id: number
  imagePath: string
}

export interface IProductVideo {
  id: number
  videoPath: string
}

export interface ISize {
  id: number
  name: string
  price: number
  price_per_gram: number
  stock: boolean
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
  sizes: ISize[]
  recommendations: IProduct[]
}

export interface IGetProductsRequest extends IPageRequest {
  // min_price?: number
  // max_price?: number
  brandIds?: number[]
  sizeIds?: number[]
  stoneIds?: number[]
  productTypeId?: number | null
  q: string
}
export interface IParsedProductsRequest extends IPageRequest {
  brand_ids?: number[]
  size_ids?: number[]
  stone_ids?: number[]
  product_type_id?: number
  q: string
}

export interface IGetProductsResponse extends IPageResponse {
  products: IProduct[]
}

export interface IGetProductResponse extends IStatusResponse {
  product: IProductDetail
}
