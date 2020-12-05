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
      <math-row
        v-for="(item, index) in arr"
        :key="index"
        :example="item"
        @set-result="setResult"
      />
    </div>
    <div class="p-2 border-t-2 border-teal-800 flex">
      <button
        class="btn mr-auto bg-blue-600 text-gray-100"
        @click="generateArr(amount)"
      >
        Generate
      </button>
      <button class="btn bg-green-600 text-gray-100" @click="result">
        Result
      </button>
    </div>
  </div>
</template>

<script>
import MathRow from "../../components/MathRow.vue";
import shuffle from "../../utils/shuffle";

export default {
  components: { MathRow },
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
      amount: 8,
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
      let r = arrG.filter((item) => item.first != 0 && item.second != 0);
      let r0 = arrG
        .filter((item) => item.first == 0 || item.second == 0)
        .slice(1, 2);
      arrG = [...shuffle([...shuffle([...r]).slice(1, amount + 1), ...r0])];
      this.arr = [];
      for (let i = 0; i < arrG.length; i++) {
        this.arr.push({
          idx: i,
          ...arrG[i],
        });
      }
      console.log(this.arr);
    },
    rnd: function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    result: function() {
      console.log(this.arr);
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
      console.log(this.arr);
    },
  },
};
</script>
