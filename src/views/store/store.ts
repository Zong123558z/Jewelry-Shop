import { authApi } from '@/entities/auth/api/auth.api'
import { catalogApi } from '@/entities/catalog/api/catalog.api'
import { filtersApi } from '@/entities/filters/api/filters.api'
import { orderApi } from '@/entities/order/api/order.api'
import { profileApi } from '@/entities/profile/api/profile.api'
import { usersApi } from '@/entities/users/api/users.api'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { rootReducer } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    })
      .concat(usersApi.middleware)
      .concat(authApi.middleware)
      .concat(orderApi.middleware)
      .concat(catalogApi.middleware)
      .concat(profileApi.middleware)
      .concat(filtersApi.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
