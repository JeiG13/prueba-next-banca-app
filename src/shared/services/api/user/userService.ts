import { IUserInfo } from "@/shared/interfaces/UserInfo";
import { createApiInstance } from "../../createApiInstance";

const userInstance = createApiInstance({
  baseURL: 'users',
});

export const getUserInfoByIdRequest = (userId: number) => userInstance
  .get<IUserInfo>(`${userId}`);
