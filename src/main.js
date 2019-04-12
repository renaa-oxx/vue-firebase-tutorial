import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = '';
var config = {
  apiKey: "AIzaSyDHvBCYhEdGeb-IRT4Fv_Aup9mTYzuAnSE",
  authDomain: "vue-firebase-tutorial-54894.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-54894.firebaseio.com",
  projectId: "vue-firebase-tutorial-54894",
  storageBucket: "vue-firebase-tutorial-54894.appspot.com",
  messagingSenderId: "417006312426"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    
  }
})
