<template>
  <view class="index">
    <swiper
      class="box"
      :autoplay="true"
      :interval="interval"
      indicator-color="#999"
      @tap="handleTap"
      @animationfinish="handleAnimationFinish"
    >
      <swiper-item>
        <view class="text">1</view>
      </swiper-item>
      <swiper-item>
        <view class="text">2</view>
      </swiper-item>
      <swiper-item>
        <view class="text">3</view>
      </swiper-item>
    </swiper>
    <NumberDisplay />
    <NumberSubmit />
  </view>
</template>

<script lang="ts">
import NumberDisplay from "../../components/NumberDisplay.vue";
import NumberSubmit from "../../components/NumberSubmit.vue";

export default {
  name: "Index",
  components: {
    NumberDisplay,
    NumberSubmit,
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
.text {
  background: #2c3e50;
  color: #fff;
  height: 30rem;
}
</style>
