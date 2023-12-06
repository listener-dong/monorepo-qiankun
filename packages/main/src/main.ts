import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'

createApp(App).mount('#app')

registerMicroApps([
  // {
  //   name: 'data-source',
  //   entry: '//localhost:8001/',
  //   container: '#subApp',
  //   activeRule: '#/data-source'
  // },
  {
    name: 'viteApp',
    entry: '//localhost:8002/',
    container: '#subApp_react',
    activeRule: '#/subApp_react'
  }
])

start({
  sandbox: {
    experimentalStyleIsolation: true
    // strictStyleIsolation: true
  },
  singular: false
})
