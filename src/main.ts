
import './main.css';
// import vuetify from './plugins/vuetify'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'




// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import { loadFonts } from './plugins/webfontloader'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'
import { createApp } from 'vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')


loadFonts()

