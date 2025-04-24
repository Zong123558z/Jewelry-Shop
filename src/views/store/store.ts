import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { usersApi } from "@/entities/users/api/users.api";
import { authApi } from "@/entities/auth/api/auth.api";
import { orderApi } from "@/entities/order/api/order.api";
import { productApi } from "@/entities/product/api/product.api";
import { profileApi } from "@/entities/profile/api/profile.api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(usersApi.middleware)
  .concat(authApi.middleware)
  .concat(orderApi.middleware)
  .concat(productApi.middleware)
  .concat(profileApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch