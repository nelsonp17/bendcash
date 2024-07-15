import { createApp } from 'vue'
import { createPinia } from 'pinia'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import App from './App.vue'
import router from './routes/main'
//import { i18n } from './i18n'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Toaster from '@meforma/vue-toaster'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
//app.use(i18n)
app.use(Toaster)
app.mount('#app')
