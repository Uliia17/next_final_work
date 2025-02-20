import {IUser} from "@/models/IUser";

export interface IUserResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}