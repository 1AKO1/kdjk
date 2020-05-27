import Vue from 'vue'
import App from './App'

import store from './store'
import validate from 'js_sdk/fshjie-formvalidate/ys-validate.js'

// 挂载到全局
Vue.prototype.$validate = validate //极简表单验证
Vue.config.productionTip = false
Vue.prototype.$store = store //vuex 状态管理

import QSInput from './components/QS-inputs-split/elements/QS-input/index.vue';
Vue.component('QSInput',QSInput);
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
