<template>
  <div class="footer-tabbar-wrap">
    <van-tabbar fixed route v-model="tabBarState.active" @change="hadnleChange">
      <van-tabbar-item v-for="(item,index) in tabBarState.data" :to="item.path" :key="item.name + index" :icon="item.meta.icon">{{ item.meta.title }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from 'vue-router'
export default defineComponent({
  name: "FooterTabBar",
    props:{
        defaultActive:{
            type:Number,
            default:0
        },
    },
  setup(props) {
    // 获取路由数组
    const routers:any = useRouter().options.routes[0].children;
    // 过滤数组
    let footerTabs:any = routers.filter((item: { meta: any; })=>{
      return item.meta.isFooterTab;
    })
    // tab响应式对象
    let tabBarState = reactive({
        active:props.defaultActive, // 默认选中
        data:footerTabs
    });
    // tab切换改变
    const hadnleChange = (index: number)=>{
        tabBarState.active = index;
    };
    return { tabBarState,hadnleChange };
  },
});
</script>

<style>
</style>