import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  status: string
}

const initialState: IInitialState = {
  status: '',
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload
    },
  },
})

export const { setStatus } = userSlice.actions
export const userReducer = userSlice.reducer
