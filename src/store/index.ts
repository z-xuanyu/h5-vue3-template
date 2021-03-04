import { createStore } from 'vuex'

export default createStore({
    state:{
        userInfo:{
            name:"xuanyu",
            email:"812006298@qq.com",
            token:"5646545645"
        }
    },
    mutations:{
        setUserInfo(state,data){
            state.userInfo = data
        }
    },
    
    actions:{
        setUserInfo(context,value){
            context.commit('setUserInfo',value)
        }
    }
})