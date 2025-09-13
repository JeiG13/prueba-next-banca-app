import { getUserInfoByIdRequest } from "@/shared/services/api/user/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk('user/getLoggedUser', async (userId: number) => {
  const { data } = await getUserInfoByIdRequest(userId);
  return data;
});
