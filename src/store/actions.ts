import { ActionContext } from "vuex";
import { YeAction, YeState } from "./types";
import mutations from "./mutations";
import { UserInfo } from "@tarojs/taro";
import Taro from "@tarojs/taro";
import { User } from "src/types/interfaces";

export const actions: YeAction<YeState, YeState> = {
  updateUser(context: ActionContext<YeState, YeState>, u: User) {
    Taro.setStorage({
      key: "user",
      data: JSON.stringify(u),
    });
    context.commit(mutations.updateUserInfo.name, u);
  },
  updateUserInfo(context: ActionContext<YeState, YeState>, userinfo: UserInfo) {
    Taro.setStorage({
      key: "userinfo",
      data: JSON.stringify(userinfo),
    });
    context.commit(mutations.updateUserInfo.name, userinfo);
  },
  addNumber(context: ActionContext<YeState, YeState>, n: number) {
    context.commit(mutations.addNumber.name, n);
  },
};

export default actions;
