import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
