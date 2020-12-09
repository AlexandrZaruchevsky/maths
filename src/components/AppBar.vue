<template>
  <div class="flex border-b-2 border-gray-200 p-1">
    <div class="flex items-center">
      <icon-menu class="cursor-pointer" @click="toogleDrawer"/>
    </div>
    <div class="flex items-center pl-4">
      Maths
    </div>
    <div class="flex ml-auto mr-0 items-center">
      <!-- <router-link to="/" class="link">Logout</router-link> -->
    </div>
  </div>
  <drawer :drawerOpen="drawerOpen" @drawer-toogle="toogleDrawer"></drawer>
</template>

<script>
import IconMenu from './icons/IconMenu'
import Drawer from './Drawer.vue'
export default {
  components:{
    Drawer,
    IconMenu
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
