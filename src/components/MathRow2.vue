<template>
  <div class="p-1 flex my-1">
    <div class="text-3xl font-bold w-1/6">{{ example.first }}</div>
    <div class="text-3xl font-bold w-1/6">{{ example.znak }}</div>
    <div class="text-3xl font-bold w-1/6">{{ example.second }}</div>
    <div class="text-3xl font-bold w-1/6">=</div>
    <div class="border-b-2 border-teal-800 ml-auto text-3xl font-bold w-2/6">
      <input class="w-full" type="number" v-model="res" @input="setResult" align="right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MathRow",
  props: {
    example: Object,
  },
  data() {
    return {
      res: '',
    };
  },
  methods: {
    setResult: function() {
      this.$emit("set-result", this.example.idx, this.res);
    },
  }
};
</script>