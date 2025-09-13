import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import uiSlice from "./slices/uiSlice";
import accountSlice from "./slices/accountSlice";
import transactionSlice from "./slices/transactionsSlice";

const rootReducer = combineSlices(
  uiSlice,
  userSlice,
  accountSlice,
  transactionSlice,
).withLazyLoadedSlices();

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
