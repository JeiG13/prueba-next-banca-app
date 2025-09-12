import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import { ReduxStatus } from "@/shared/enums/reduxStatusEnum";
import { IUserInfo } from "@/shared/interfaces/UserInfo"

import { getUserInfo } from "../thunks/userThunk";

type UserSliceState = {
  loggedUser: IUserInfo | undefined;
  loggedUserStatus: ReduxStatus;
};

const initialState: UserSliceState = {
  loggedUser: undefined,
  loggedUserStatus: ReduxStatus.idle,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state) => {
      state.loggedUserStatus = ReduxStatus.pending;
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.loggedUserStatus = ReduxStatus.failed;
      state.loggedUser = initialState.loggedUser;
      toast.error('Ha ocurrido un error al obtener el usuario');
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.loggedUserStatus = ReduxStatus.succeeded;
      state.loggedUser = action.payload;
      toast.success('El usuario se ha obtenido correctamente');
    });
  }
});

export const { resetUserSlice } = userSlice.actions;

export default userSlice;
