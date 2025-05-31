import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { authApi } from '@/entities/auth/api/auth.api'
import { catalogApi } from '@/entities/catalog/api/catalog.api'
import { filtersApi } from '@/entities/filters/api/filters.api'
import { orderApi } from '@/entities/order/api/order.api'
import { profileApi } from '@/entities/profile/api/profile.api'
import { usersApi } from '@/entities/users/api/users.api'

import { basketReducer } from './basket.slice'
import { mainReducer } from './main.slice'
import { modalsReducer } from './modals.slice'
import { productReducer } from './product.slice'
import { searchFilterReducer } from './searchFilter.slice'
import { userReducer } from './user.slice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket'],
}

const reducers = combineReducers({
  main: mainReducer,
  product: productReducer,
  user: userReducer,
  modals: modalsReducer,
  searchFilter: searchFilterReducer,
  basket: basketReducer,

  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [catalogApi.reducerPath]: catalogApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [filtersApi.reducerPath]: filtersApi.reducer,
})

export const rootReducer = persistReducer(persistConfig, reducers)
