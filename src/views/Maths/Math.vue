<template>
  <div
    class="border-2 border-teal-800 mx-auto w-full lg:w-1/3 md:w-1/2 shadow-lg"
  >
    <div
      class="border-b-2 border-teal-800 p-1 text-lg font-bold bg-teal-700 text-gray-100"
    >
      Maths
    </div>
    <div class="px-1">
      <div
        class="p-1 flex my-1"
        v-for="(item, index) in arr"
        :key="index"
      >
        <div class="text-3xl font-bold w-1/6">{{ item.first }}</div>
        <div class="text-3xl font-bold w-1/6">{{ item.znak }}</div>
        <div class="text-3xl font-bold w-1/6">{{ item.second }}</div>
        <div class="text-3xl font-bold w-1/6">=</div>
        <select
          name="selectResult"
          class="border-b-2 border-teal-800 ml-auto text-3xl font-bold w-2/6"
        >
          <option value="{{item.validity}}" selected class="text-base">{{item.validity}}</option>
          <option value="0" class="text-base">0</option>
          <option
            v-for="item in 10"
            :key="item"
            value="item"
            class="text-base"
            >{{ item }}</option
          >
        </select>
      </div>
    </div>
    <div class="p-2 border-t-2 border-teal-800 flex">
      <button
        class="btn mr-auto bg-blue-600 text-gray-100"
        @click="generateArr(amount)"
      >
        Generate
      </button>
      <button class="btn bg-green-600 text-gray-100">Result</button>
    </div>
  </div>
</template>

<script>
import shuffle from "../../utils/shuffle";

export default {
  name: "Math",
  data() {
    return {
      arr: [],
      primer: {
        first: 0,
        second: 0,
        znak: "",
        result: "",
        validity: -1,
      },
      amount: 10,
    };
  },
  methods: {
    generateArr: function(amount) {
      let one, two;
      let arrG = [],
        priG = {},
        znak = "+";
      for (let i = 0; i < amount * 30; i++) {
        one = this.rnd(11);
        two = one != 10 ? this.rnd(10 - one) : 0;
        priG = {
          first: one,
          second: two,
          znak: znak,
          result: -1,
          validity: znak == "+" ? one + two : one - two,
        };
        arrG.push(priG);
      }
      this.arr = [...shuffle([...arrG]).slice(1, amount + 1)];
    },
    rnd: function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
  },
};
</script>

<style></style>
