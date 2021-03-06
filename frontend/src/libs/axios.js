import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
   // You can add your headers here
   // ================================
   baseURL: '/api/',
   // baseURL: '/',
   // baseURL: 'http://ck34858.tmweb.ru/',
   // baseURL: 'http://127.0.0.1:8000/',
   // baseURL: 'http://127.0.01/api/',
   // timeout: 1000,
   headers: {'X-Custom-Header': 'foobar'},
})

Vue.prototype.$http = axiosIns

export default axiosIns
