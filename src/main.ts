import { createApp } from "vue";
import router from "./router";
import App from "./App";
import vuex from "./store";

import { get, post } from "./api";

import { Button, Tab, Tabs } from "vant";

console.log(router);

const app = createApp(App);

app.config.globalProperties.$get = get;
app.config.globalProperties.$post = post;
app.use(Button);
app.use(Tabs);
app.use(Tab);
app.use(router);
app.use(vuex);
app.mount("#app");

// import { createApp } from 'vue';
// import Vant from 'vant';
// import 'vant/lib/index.css';
// import App from './App.vue'

// const app = createApp(App);
// app.use(Vant);
// app.mount('#app')
