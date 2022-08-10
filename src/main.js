import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { MotionPlugin } from '@vueuse/motion'

library.add(faClipboardCheck)
createApp(App).use(router).use(MotionPlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app')