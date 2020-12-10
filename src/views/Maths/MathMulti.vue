<template>
  <div class="w-full flex">
    <math-t :title="title" :typeMaths="typeMaths" />
  </div>
</template>

<script>
import MathT from "../../components/Math.vue";
export default {
  name: "Math10",
  components: {
    MathT,
  },
  data() {
    return {
      title: "Таблица умножения",
      typeMaths: "*",
    };
  },
};
</script>
