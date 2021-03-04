<template>
  <div class="app-container">
      <div class="layout-content">
          <keep-alive v-if='$route.meta.keepAlive'>
            <router-view></router-view>
          </keep-alive>
          <router-view v-else></router-view>
      </div>
      <div class="layout-footer">
          <footer-tab-bar></footer-tab-bar>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterTabBar from './components/FooterTabBar.vue'
export default defineComponent({
    name:"Layout",
    components:{
        FooterTabBar
    }
})
</script>

<style>

</style>