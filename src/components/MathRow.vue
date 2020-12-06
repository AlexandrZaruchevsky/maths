<template>
  <div class="p-1 flex my-1">
    <div class="text-3xl font-bold w-1/6">{{ example.first }}</div>
    <div class="text-3xl font-bold w-1/6">{{ example.znak }}</div>
    <div class="text-3xl font-bold w-1/6">{{ example.second }}</div>
    <div class="text-3xl font-bold w-1/6">=</div>
    <select
      name="selectResult"
      class="border-b-2 border-teal-800 ml-auto text-3xl font-bold w-2/6"
      v-on:change="setResult(example.idx)"
      id="sss"
      v-model="selected"
    >
      <option
        v-for="(item, idx) in res"
        :key="idx"
        :value="item"
        class="text-base"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "MathRow",
  props: {
    example: Object,
    new: Boolean,
  },
  data() {
    return {
      selected: '',
      res: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      isSelect: false,
      newR: false,
    };
  },
  methods: {
    setResult: function(e) {
      this.$emit("set-result", e, this.selected);
      this.newR = false;
    },
  }
};
</script>
