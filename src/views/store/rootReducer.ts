import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./main.slice";
import { usersApi } from "@/entities/users/api/users.api";
import { authApi } from "@/entities/auth/api/auth.api";
import { orderApi } from "@/entities/order/api/order.api";
import { productApi } from "@/entities/product/api/product.api";
import { profileApi } from "@/entities/profile/api/profile.api";

export const rootReducer = combineReducers({
  main: mainReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
})