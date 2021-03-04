import request from "../utils/request";


// 获取首页列表数据
export function getHomeDatas(){
    return request({
        url:"api/home",
        method:"get",
    })
}