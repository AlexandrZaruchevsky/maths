<template>
    <div>
    <div
      class="absolute w-screen bg-gray-300 bg-opacity-75 h-screen top-0 left-0"
    ></div>
    <div class="absolute w-screen left-0 flex">
      <div
        class="w-full lg:w-1/3 md:w-1/2 mx-auto bg-white border-2 border-gray-300 rounded shadow"
      >
        <!-- <div class="text-lg p-2">Result</div> -->
        <div 
          class="p-2 text-5xl border-b-4 border-separate border-orange-600 font-bold"
          :class="congratsClass"
        >{{congrats}}</div>
        <div class="p-4">
          <div class="border-b-2  border-gray-200 flex text-2xl text-gray-700 font-bold">
            <div class="w-9/12">Всего примеров:</div>
            <div class="w-3/12 text-right">{{result.amount}}</div>
          </div>
        </div>
        <div class="p-4">
          <div class="border-b-2 border-gray-200 flex text-2xl text-green-700 font-bold">
            <div class="w-9/12">Правильно:</div>
            <div class="w-3/12 text-right">{{result.success}}</div>
          </div>
        </div>
        <div class="p-4">
          <div class="border-b-2 border-gray-200 flex text-2xl text-red-500 font-bold">
            <div class="w-9/12">Не правильно:</div>
            <div class="w-3/12 text-right">{{result.fail}}</div>
          </div>
        </div>
        <div class="flex p-2 justify-center">
          <button class="btn-success" @click="resShow">
            Ok
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    result: Object,
  },
  computed:{
    congrats:function(){
      if(this.result.success==9){
        return 'Великолепно!'
      }
      if(this.result.success>7){
        return 'Отлично!'
      }
      if(this.result.success>4){
        return 'Хорошо!'
      }
      return 'Плохо'
    },
    congratsClass:function(){
      if(this.result.success==9){
        return 'text-red-700'
      }
      if(this.result.success>7){
        return 'text-green-700'
      }
      if(this.result.success>4){
        return 'text-blue-700'
      }
      return 'text-orange-700'
    }
  },
  methods:{
    resShow:function(){
      this.$emit("result-show");
    }
  }
};
</script>
