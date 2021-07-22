<template>
  <input v-model="number" type="number" class="input" />
  <AtButton @tap="addNumber" type="primary" >Add new Data</AtButton>
</template>

<script lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import mutations from '../store/mutations';
// import Taro from "@tarojs/taro";

export default {
  setup() {
    const store = useStore();
    const number = ref(0);

    function addNumber() {
      console.log(number.value);

      store.dispatch(mutations.addNumber.name, Number(number.value));
    }

    return {
      number,
      addNumber,
    };
  },
};
</script>

<style>
.input {
  border: 1px solid lightgray;
  margin: 10px;
}
</style>
