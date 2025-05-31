import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  isRegistrationModalOpen: boolean
  isSuccessModalOpen: boolean
}

const initialState: IInitialState = {
  isRegistrationModalOpen: false,
  isSuccessModalOpen: false,
}

const modalsSlice = createSlice({
  name: 'modalsSlice',
  initialState: initialState,
  reducers: {
    setIsRegistrationModalOpen: (state, action: PayloadAction<IInitialState['isRegistrationModalOpen']>) => {
      state.isRegistrationModalOpen = action.payload
    },
    setIsSuccessModalOpen: (state, action: PayloadAction<IInitialState['isSuccessModalOpen']>) => {
      state.isSuccessModalOpen = action.payload
    },
  },
})

export const { setIsRegistrationModalOpen, setIsSuccessModalOpen } = modalsSlice.actions
export const modalsReducer = modalsSlice.reducer
