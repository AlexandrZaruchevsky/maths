<template>
  <div>
  <nav 
    class="navbar navbar-open absolute bg-white top-0 h-screen z-20"
    :class="drawerOpen ? 'navbar-open' : 'navbar-close'"
  >
    <div class="pt-5">
      <div class="flex flex-col px-4">
        <router-link to="/" class="link-green w-full mb-2 px-2" @click.prevent="clickLink">Счет в пределах 10</router-link>
        <router-link to="/math20" class="link-green w-full mb-2 px-2" @click.prevent="clickLink">Счет в пределах 20</router-link>
        <router-link to="/multi" class="link-green w-full px-2" @click.prevent="clickLink">Таблица умножения</router-link>
      </div>
      <ul class="list-none items-start px-10 flex flex-col">
        <li class="w-full"></li>
        <li class="my-8"></li>
      </ul>
    </div>
  </nav>
  <div
    class="absolute top-0 bg-gray-500 bg-opacity-50 h-screen w-screen z-10"
    :class="drawerOpen ? 'navbar-open' : 'navbar-close'"
    @click="toogleDraw()"
  ></div>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  props:{
    drawerOpen: Boolean
  },
  methods:{
    toogleDraw(){
      this.$emit('drawer-toogle');
    },
    clickLink(e){
      this.$router.push({path: e.target.href})
      this.toogleDraw();
    }
  }
};
</script>

<style>
.navbar {
  transition: all 100ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}
</style>
