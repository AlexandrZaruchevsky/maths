<template>
  <div class="flex border-b-2 border-gray-200 p-1">
    <div class="flex items-center">
      <button 
        class="text-2xl"
        @click.prevent="toogleDrawer"
      >
        &#9776;</button>
    </div>
    <div class="flex items-center pl-4">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/math" class="link">Maths</router-link>
    </div>
    <div class="flex ml-auto mr-0 items-center">
      <router-link to="/" class="link">Logout</router-link>
    </div>
  </div>
  <drawer :drawerOpen="drawerOpen" @drawer-toogle="toogleDrawer"></drawer>
</template>

<script>
import Drawer from './Drawer.vue'
export default {
  components:{
    Drawer
  },
  data(){
    return{
      drawerOpen: false
    }
  },
  methods:{
    toogleDrawer(){
      this.drawerOpen = !this.drawerOpen
    }
  }
};
</script>
