import Vue from 'vue'
import Appli from './App.vue'
import './../node_modules/bulma/css/bulma.css'
import firebase from 'firebase/app'
import 'firebase/database'

const config = {
	apiKey: 'AIzaSyCAhXz7ULD5AiWSE7-qvq5Pu3vg0l89bEY',
	authDomain: 'parseapp-e8b30.firebaseapp.com',
	databaseURL: 'https://parseapp-e8b30.firebaseio.com',
	projectId: 'parseapp-e8b30',
	storageBucket: 'parseapp-e8b30.appspot.com',
	messagingSenderId: '246109443388'
}

firebase.initializeApp(config)
const dbRef = firebase.database().ref()

Vue.prototype.$ref = dbRef.child('ocorrencias')

Vue.config.productionTip = false

new Vue({
	render: h => h(Appli)
}).$mount('#app')
