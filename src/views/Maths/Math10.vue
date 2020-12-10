<template>
  <div class="w-full flex">
    <math-t :title="title"/>
  </div>
</template>

<script>
import MathT from '../../components/Math.vue';
export default {
  name:'Math10',
  components:{
    MathT
  },
  data(){
    return{
      title:"Счет в пределах 10"
    }
  }
};
</script>