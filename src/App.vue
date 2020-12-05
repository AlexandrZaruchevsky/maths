<template>
  <div class="h-screen w-screen">
    <header>
      <app-bar />
    </header>
    <section class="p-2 flex">
      <router-view />
    </section>
    <footer></footer>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  components: {
    AppBar,
  },
};
</script>
