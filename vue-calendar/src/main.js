import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutoSize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextAreaAutoSize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDKZaW35glqvenKgTw5rA1GoMDF4ouJ4tA",
  authDomain: "vuetify-calendar-32934.firebaseapp.com",
  databaseURL: "https://vuetify-calendar-32934.firebaseio.com",
  projectId: "vuetify-calendar-32934",
  storageBucket: "vuetify-calendar-32934.appspot.com",
  messagingSenderId: "566135897789",
  appId: "1:566135897789:web:31fc24c31aedf8305f41d4"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
