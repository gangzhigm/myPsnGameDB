import Vue from 'vue/dist/vue.js';
import App from './components/app.vue'
import 'normalize.css'  
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const app = window.addEventListener('load', () => {
  new Vue({
    "el": "#vueapp",
    name: App,
    components: { App },
    template: `<App />`
  })
})

if (module.hot) {
	module.hot.accept();
}

export default app;
