import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  user: any,
  settings: {
    isMobileDevice: boolean
    filterOpen: boolean
  }
}

const initialState: IInitialState = {
  user: null,
  settings: {
    isMobileDevice: false,
    filterOpen: false
  }
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    setIsMobileDevice: (state, action: PayloadAction<IInitialState['settings']['isMobileDevice']>) => {
      state.settings.isMobileDevice = action.payload
    },
    setFilterOpen: (state, action: PayloadAction<IInitialState['settings']['filterOpen']>) => {
      state.settings.filterOpen = action.payload
    },
  },
})

export const { setIsMobileDevice, setFilterOpen } = mainSlice.actions
export const mainReducer = mainSlice.reducer
