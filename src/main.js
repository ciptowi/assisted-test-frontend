import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3 from "bootstrap-vue-3";
import Admin from "./layouts/Admin.vue"
import Guest from "./layouts/Guest.vue"


//font awesome icon
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from "./App.vue";
import router from "./router";

//css
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";


const app = createApp(App);

app.component('default-layout', Guest)
app.component('admin-layout', Admin)
app.use(BootstrapVue3);
app.use(createPinia());
app.use(router);

app.mount("#app");

