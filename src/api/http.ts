import Taro from "@tarojs/taro";
import { request } from "@tarojs/taro";
import { User } from "src/types/interfaces";

const BaseURL = "https://wechat.yexk.cn";
const Headers = {
  "content-type": "application/json", // 默认值
};

class Http {
  /**
   * 注册接口
   * @param data
   * @returns
   */
  register(data: User): Promise<request.SuccessCallbackResult> {
    return this.http("/api/register", data, "POST");
  }

  /**
   * base
   * @param url
   * @param data
   * @param methods
   * @returns
   */
  http(
    url: string,
    data: object,
    methods: keyof request.method = "POST"
  ): Promise<request.SuccessCallbackResult> {
    return new Promise<request.SuccessCallbackResult>((resolve, reject) => {
      console.log(data);
      console.log(methods);
      Taro.request({
        url: BaseURL + url,
        data: {
          x:1,
          y:2
        },
        method: methods,
        header: Headers,
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          reject(res);
        },
      });
    });
  }
}

export default new Http();
