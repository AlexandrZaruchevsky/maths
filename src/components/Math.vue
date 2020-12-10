<template>
  <div
    class="border rounded border-teal-800 mx-auto w-full lg:w-1/3 md:w-1/2 shadow-lg"
  >
    <div
      class="border-b rouded-t border-teal-800 p-2 text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-200 text-gray-100"
    >
      {{title}}
    </div>
    <div class="px-1">
      <div
        class="p-1 flex my-1"
        v-for="(item, index) in arr"
        :key="index"
        :id="item.idx"
      >
        <div class="text-3xl font-bold w-1/6">{{ item.first }}</div>
        <div class="text-3xl font-bold w-1/6">{{ item.znak }}</div>
        <div class="text-3xl font-bold w-1/6">{{ item.second }}</div>
        <div class="text-3xl font-bold w-1/6">=</div>
        <div
          class="border-b-2 border-teal-800 ml-auto text-3xl font-bold w-2/6"
        >
          <input class="w-full" type="number" v-model="item.result" />
        </div>
      </div>
    </div>
    <div class="p-2 border-t border-teal-800 flex">
      <button class="btn btn-primary" @click="generateArrQ(amount)">
        Generate
      </button>
      <button class="btn btn-success ml-auto" @click="result">
        Result
      </button>
    </div>
  </div>
  <result
    :result="res"
    v-show="resultShow"
    @result-show="result"
    @result-invalid="resultInvalid"
  />
</template>

<script>
import Result from "./Result.vue";

import { generateArr, genArraMultiply, result } from "../utils/Maths";

export default {
  components: { Result },
  props: {
    typeMaths: String,
    title:String
  },
  name: "Math",
  data() {
    return {
      resultShow: false,
      res: {
        amount: 0,
        success: 0,
        fail: 0,
      },
      arr: [],
      amount: 9,
    };
  },
  computed: {
    arrC: function() {
      return this.arr;
    },
  },
  methods: {
    generateArrQ: function(amount) {
      this.arr = [];
      setTimeout(() => {
        if (this.typeMaths == "20") {
          this.arr = generateArr(amount, 20);
        } else if (this.typeMaths == "*") {
          this.arr = genArraMultiply(amount);
        } else {
          this.arr = generateArr(amount);
        }
      }, 0);
    },
    result: function() {
      this.res = result(this.arr);
      this.resultShow = !this.resultShow;
    },
    setResult: function(idx, payload) {
      let el = this.arr.find((item) => item.idx == idx);
      this.arr = [
        ...this.arr.slice(0, idx),
        {
          idx: el.idx,
          first: el.first,
          second: el.second,
          znak: el.znak,
          result: payload,
          validity: el.validity,
        },
        ...this.arr.slice(idx + 1, this.arr.length),
      ];
    },
    resultInvalid() {
      let arrr = [...this.arr];
      for (let i = 0; i < arrr.length; i++) {
        if (arrr[i].result != "" && arrr[i].result == arrr[i].validity) {
          document.getElementById(i).classList.remove("text-red-700");
        } else {
          document.getElementById(i).classList.add("text-red-700");
        }
      }
    },
  },
};
</script>
