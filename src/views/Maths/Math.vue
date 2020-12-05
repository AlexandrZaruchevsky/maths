<template>
  <div
    class="border-2 border-teal-800 mx-auto w-full lg:w-1/3 md:w-1/2 shadow-lg"
  >
    <div
      class="border-b-2 border-teal-800 p-1 text-lg font-bold bg-teal-700 text-gray-100"
    >
      Maths
    </div>
    <div class="p-2">
      <div class="border-2 border-teal-800 p-1 flex lg:space-x-5 sm:space-x-4 my-1">
          <div class="text-6xl">1</div>
          <div class="text-6xl">+</div>
          <div class="text-6xl">2</div>
          <div class="text-6xl">=</div>
        <select name="selectResult" class="border-b-2 border-teal-800 ml-auto text-6xl">
          <option value="0" selected  class="text-base">0</option>
          <option v-for="(item) in 10" :key="item" value="item" class="text-base">{{item}}</option>
        </select>
      </div>
      <div class="border-2 border-teal-800 p-1 flex lg:space-x-5 sm:space-x-4 my-1">
          <div class="text-6xl">1</div>
          <div class="text-6xl">+</div>
          <div class="text-6xl">2</div>
          <div class="text-6xl">=</div>
        <select name="selectResult" class="border-b-2 border-teal-800 ml-auto text-6xl">
          <option value="0" selected  class="text-base">0</option>
          <option v-for="(item) in 10" :key="item" value="item" class="text-base">{{item}}</option>
        </select>
      </div>
      <div class="border-2 border-teal-800 p-1 flex lg:space-x-5 sm:space-x-4 my-1">
          <div class="text-6xl">1</div>
          <div class="text-6xl">+</div>
          <div class="text-6xl">2</div>
          <div class="text-6xl">=</div>
        <select name="selectResult" class="border-b-2 border-teal-800 ml-auto text-6xl">
          <option value="0" selected  class="text-base">0</option>
          <option v-for="(item) in 10" :key="item" value="item" class="text-base">{{item}}</option>
        </select>
      </div>
    </div>
    <div class="p-2 border-t-2 border-teal-800">Progres</div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
