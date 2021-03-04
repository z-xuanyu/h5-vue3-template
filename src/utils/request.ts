import axios from 'axios';
import { Toast } from 'vant'
const service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
});

// 发起请求之前的拦截器
service.interceptors.request.use(config => {
    // 请求前loading
    Toast.loading({
        duration: 0,
        forbidClick: true,
      });
    // 如果有token 就携带tokon
    const token = window.localStorage.getItem("accessToken");

    if (token) {
        config.headers['Authorization '] = token;
    }

    return config
}, error => Promise.reject(error))



// 响应拦截器
service.interceptors.response.use(response => {
    const res = response.data;

    if (response.status !== 200) {
        return Promise.reject(new Error(res.message || "Error"));
    } else {
        // 清除loading
        Toast.clear();
        return res
    }
}, error => Promise.reject(error))
export default service