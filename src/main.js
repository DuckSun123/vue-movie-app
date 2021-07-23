import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import loadImage from './plugin/loadImage'

createApp(App)
  .use(router)
  .use(store)
  .use(loadImage)
  .mount('#app')