import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import firebase from "firebase/app";
import store from "./store";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_apiKey,
  authDomain: process.env.VUE_APP_FIREBASE_authDomain,
  projectId: process.env.VUE_APP_FIREBASE_projectId,
  storageBucket: process.env.VUE_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.VUE_APP_FIREBASE_messagingSenderId,
  appId: process.env.VUE_APP_FIREBASE_appId,
  measurementId: process.env.VUE_APP_FIREBASE_measurementId,
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  console.log({ user });
  store.dispatch("fetchUser", user);
});

const head = createHead();

createApp(App)
  .use(store)
  .use(router)
  .use(head)
  .mount("#app");
