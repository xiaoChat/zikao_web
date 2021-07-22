import { UserInfo } from "@tarojs/taro";
import { User } from "src/types/interfaces";
import { YeGetters, YeState } from "./types";

const getters: YeGetters<YeState, YeState> = {
  getUser(state: YeState): User {
    return state.user;
  },
  getUserInfo(state: YeState): UserInfo {
    return state.UserInfo;
  },
  getNumbers(state: YeState): Array<number> {
    return state.numbers;
  },
};

export default getters;
