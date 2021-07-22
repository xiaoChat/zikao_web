import { YeState } from "./types";

const state: YeState = {
  user: {
    encryptedData: "",
    iv: "",
    rawData: "",
    signature: "",
    userInfo: {
      avatarUrl: "",
      city: "",
      country: "",
      gender: 0,
      language: "zh_CN",
      nickName: "",
      province: "",
    },
    errMsg: "",
  },
  UserInfo: {
    avatarUrl: "",
    city: "",
    country: "",
    gender: 0,
    language: "zh_CN",
    nickName: "",
    province: "",
  },
  numbers: [1, 2, 3],
};

export default state;
