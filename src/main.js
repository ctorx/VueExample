import './scss/styles.scss';

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faCheck, faTimes, faExclamationTriangle, faCheckCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
