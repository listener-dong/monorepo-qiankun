import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

interface Prop {
  container?: HTMLElement
  path?: string
}

let root: null | ReactDOM.Root = null

function render(props?: Prop) {
  let container: null | HTMLElement = null
  if (props && props.container) {
    container = props.container
  }

  const appContainer = (
    container
      ? container.querySelector('#root')
      : document.getElementById('root')
  ) as HTMLElement

  root = ReactDOM.createRoot(appContainer)

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

function changeUserListener(e: Event) {
  console.log('e===>', e)
}

renderWithQiankun({
  mount: async (props: Prop) => {
    render(props)
    qiankunWindow.addEventListener('changeUser', changeUserListener)
  },
  bootstrap() {},
  unmount: async () => {
    root && root.unmount()
    qiankunWindow.removeEventListener('changeUser', changeUserListener)
  },
  update() {}
})
