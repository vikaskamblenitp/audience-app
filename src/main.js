import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

const loadimage = require('./assets/Loading_icon.gif');
const errorimage = require('./assets/download.png');


import {initializeApp} from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAciRnzc26SZBDleqPhA661TUh70thw1ME",
    authDomain: "audience-app-dc736.firebaseapp.com",
    projectId: "audience-app-dc736",
    storageBucket: "audience-app-dc736.appspot.com",
    messagingSenderId: "756012357505",
    appId: "1:756012357505:web:00dbf8833777e64eb9fa80",
    measurementId: "G-VHK8JP1LM4"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

console.log(firebaseApp);

import router from './router.js';
import store from './store.js';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(VueLazyload);
app.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
});

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app')
