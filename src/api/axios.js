import axios from 'axios'

const server = axios.create({
    // baseURL: "http://rap2api.taobao.org/app/mock/238493"
    baseURL: "http://rap2api.taobao.org/app/mock/238675"
})

// 请求拦截
server.interceptors.request.use(config => {
    console.log("req拦截")
    return config
})

// 响应拦截
server.interceptors.response.use(res => {
    console.log("res拦截")
    return res.data
})

export default server