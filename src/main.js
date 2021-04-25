import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";

const head = createHead();

createApp(App)
  .use(router)
  .use(head)
  .mount("#app");
