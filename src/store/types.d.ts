import { UserInfo } from "@tarojs/taro";
import { User } from "src/types/interfaces";
import { MutationTree, ActionTree, ActionContext, GetterTree } from "vuex";

export interface YeState {
  user: User;
  UserInfo: UserInfo;
  numbers: Array<number>;
}

export interface YeGetters<S, R> extends GetterTree<S, R> {
  getUser: (state: S) => User;
  getUserInfo: (state: S) => UserInfo;
  getNumbers: (state: S) => Array<number>;
}

export interface YeMutations<S> extends MutationTree<S> {
  updateUser: (state: S, u: User) => void;
  updateUserInfo: (state: S, u: UserInfo) => void;
  addNumber: (state: S, n: number) => void;
}

export interface YeAction<S, R> extends ActionTree<S, R> {
  updateUser: (context: ActionContext<S, R>, u: User) => void;
  updateUserInfo: (context: ActionContext<S, R>, u: UserInfo) => void;
  addNumber: (context: ActionContext<S, R>, n: number) => void;
}
