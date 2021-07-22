import { UserInfo } from "@tarojs/taro";
import { User } from "src/types/interfaces";
import { YeState, YeMutations } from "./types";

const mutations: YeMutations<YeState> = {
  updateUser(state: YeState, u: User) {
    state.user = u;
  },
  updateUserInfo(state: YeState, u: UserInfo) {
    state.UserInfo = u;
  },
  addNumber(state: YeState, n: number) {
    state.numbers.push(n);
  },
};

export default mutations;
