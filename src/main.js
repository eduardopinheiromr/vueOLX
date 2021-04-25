import { createApp } from "vue";
import App from "./App.vue";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
