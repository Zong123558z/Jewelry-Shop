import { OrderStatus, PaymentMethod } from "@/entities/general/types/general.enum"

export interface IOrderItem {
  id: number
  name: string
  quantity: number
  unitPrice: number
}

export interface IOrderDetail {
  id: number
  orderDate: string
  totalAmount: number
  paymentMethod: PaymentMethod
  discountPercentage: number
  status: OrderStatus
  items: IOrderItem[]
}

export interface ICreateOrderRequest {
  items: IOrderItem[]
  paymentMethod: PaymentMethod
}

export interface ICreateOrderResponse {
  success: boolean
  orderId: number
  message?: string
}