<template>
  <view>
    <AtAvatar
      circle
      text="自考妹妹"
      :openData="{ type: 'userAvatarUrl' }"
    ></AtAvatar>
    <AtButton @click="getUserInfo"> 登录 </AtButton>

    <view>{{ getUserInfoData.nickName }}</view>
  </view>
</template>

<script lang="ts">
import { useStore } from "vuex";
import Taro from "@tarojs/taro";
import mutations from "../../store/mutations";
import { computed, onMounted } from "@vue/runtime-core";
import api from "../../api/http";

export default {
  setup() {
    const store = useStore();
    const getUserInfoData = computed(() => store.getters.getUserInfo);

    onMounted(() => {
      Taro.getStorage({
        key: "userinfo",
        success: (res) => {
          store.dispatch(mutations.updateUserInfo.name, JSON.parse(res.data));
        },
      });
    });

    const getUserInfo = () => {
      Taro.getUserProfile({
        desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          store.dispatch(mutations.updateUser.name, res);
          store.dispatch(mutations.updateUserInfo.name, res.userInfo);
          // api register
          api.register(res).then((res) => {
            console.log(res.data);
          });
        },
        fail: () => {
          Taro.showModal({
            title: "提示",
            content:
              "您取消了用户资料授权，这样会导致没办法保存一些用户的习惯。",
          });
        },
      });
    };

    return {
      getUserInfoData,
      getUserInfo,
    };
  },
};
</script>

<style>
.title {
  font-size: 40px;
}
</style>
