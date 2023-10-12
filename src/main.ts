import { createSSRApp } from 'vue'
// @ts-ignore
import uView from 'uview-plus'
import App from './App.vue'
import store from './store'

// eslint-disable-next-line import/prefer-default-export
export function createApp() {
  const app = createSSRApp(App).use(store)

  // 使用 uView UI
  app.use(uView)
  return {
    app
  }
}
