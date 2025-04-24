export interface IStatusResponse {
  success: boolean
  message?: string
}

export interface IPageRequest {
  page: number
  limit?: number
  q?: string
}

export interface IPageResponse extends IStatusResponse {
  page: number
  totalPages: number
}
