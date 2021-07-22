import { User } from "./interfaces";

export interface Resp<T extends object> {
  code: number;
  data: T;
  msg: string;
}
