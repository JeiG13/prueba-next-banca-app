import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

import boardSlice from "@/features/board/store/boardSlice";

import userSlice from "./slices/userSlice";
import uiSlice from "./slices/uiSlice";
import accountSlice from "./slices/accountSlice";

const rootReducer = combineSlices(
  uiSlice,
  boardSlice,
  userSlice,
  accountSlice,
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
