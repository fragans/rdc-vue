import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/styles.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faChevronDown)
library.add(faChevronUp)

const app = createApp(App)

app.use(router)

app.use(VueAxios, axios)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
