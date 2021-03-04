import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        component:()=> import("../layouts/index.vue"),
        redirect:'/home',
        meta:{
            title:"Layout",
            keepAlive:false,
        },
        children:[
            {
                path:"/home",
                name:"Home",
                meta:{
                    title:'首頁',
                    icon:"home-o",
                    keepAlive:false,
                    isFooterTab:true, // 是否显示在底部导航栏，默认是 (fale)
                },
                component:()=> import('../views/home/index.vue')
            },
            {
                path:"/login",
                name:"Login",
                meta:{
                    title:'登录',
                    keepAlive:false,
                    icon:'user-o',
                    isFooterTab:true, // 是否显示在底部导航栏，默认是 (fale)
                },
                component:()=> import("../views/login/index.vue")
            },
        ]
    },
];


const router = createRouter({
    history:createWebHashHistory(),
    routes,
    scrollBehavior:()=>{y:0}
})

export default router