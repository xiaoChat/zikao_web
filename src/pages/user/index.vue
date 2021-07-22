<template>
  <view class="user">
    <UserInfo/>
  </view>
</template>

<script>
import UserInfo from "../../components/user/UserInfo.vue";

export default {
  name: "User",
  components: {
    UserInfo,
  },
  data() {
    return {
      interval: 1000,
    };
  },
  methods: {
    handleTap() {
      console.log("tap");
    },
    handleAnimationFinish() {
      console.log("finish");
    },
  },
};
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text{
  background: #2c3e50;
  color: #fff;
  height: 30rem;
}
</style>
