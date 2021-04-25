import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8R5I3WUaIfinaJGLdFn7gyoepcxJHdxM",
  authDomain: "vueolx.firebaseapp.com",
  projectId: "vueolx",
  storageBucket: "vueolx.appspot.com",
  messagingSenderId: "611651939224",
  appId: "1:611651939224:web:a2a07aa427297bacf559ed",
  measurementId: "G-19NZTZ1Z0Q",
};

firebase.initializeApp(firebaseConfig);

const head = createHead();

createApp(App)
  .use(router)
  .use(head)
  .mount("#app");
