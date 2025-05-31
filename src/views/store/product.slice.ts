import { ISize } from '@/entities/catalog/types/catalog'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  currentSize: ISize | null
  sizes: ISize[] | null
}

const initialState: IInitialState = {
  currentSize: null,
  sizes: null,
}

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initialState,
  reducers: {
    setSizes(state, action: PayloadAction<ISize[]>) {
      state.sizes = action.payload
    },

    setCurrentSize(state, action: PayloadAction<ISize>) {
      state.currentSize = action.payload
    },
  },
})

export const { setSizes, setCurrentSize } = productSlice.actions
export const productReducer = productSlice.reducer
