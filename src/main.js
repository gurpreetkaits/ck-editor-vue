import Vue from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue2';

import './assets/main.css'

Vue.use(CKEditor);

new Vue({
  render: (h) => h(App)
}).$mount('#app')
