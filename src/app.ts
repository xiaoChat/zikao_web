import { createApp } from 'vue'
import store from './store'
import taroUI from './plugins/taroUI'

import './app.scss'

const App = createApp({
  onShow () {},
})

App.use(taroUI)
App.use(store)

export default App
