import { IBasketItem } from '@/entities/catalog/types/catalog'
import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  products: IBasketItem[]
}

const initialState: IInitialState = {
  products: [],
}

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload)
    },
    removeProduct(state, action) {
      state.products = state.products.filter(p => p.product.id !== action.payload)
    },
    increaseAmount(state, action) {
      state.products = state.products.map(p => {
        if (p.product.id === action.payload) {
          const amount = p.amount > 9 ? 10 : p.amount + 1
          return { ...p, amount }
        }
        return p
      })
    },
    setDeleted(state, action) {
      const { product, isDeleted } = action.payload

      state.products = state.products.map(p => {
        if (p.product.id === product.product.id) {
          return { ...p, isDeleted }
        }
        return p
      })
    },
    clearDeletedProducts: state => {
      state.products = state.products.filter(p => !p.isDeleted)
    },
    decreaseAmount(state, action) {
      state.products = state.products.map(p => {
        if (p.product.id === action.payload) {
          const amount = p.amount < 1 ? 0 : p.amount - 1
          return { ...p, amount }
        }
        return p
      })
    },
  },
})

export const { addProduct, removeProduct, increaseAmount, decreaseAmount, setDeleted, clearDeletedProducts } =
  basketSlice.actions
export const basketReducer = basketSlice.reducer
