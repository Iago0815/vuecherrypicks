import { createApp } from 'vue'
import router from './router.js';

import store from "./store/index.js";
import App from './App.vue'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import BaseDialog from './components/BaseDialog.vue';
import BaseButton from './components/BaseButton.vue';

const app = createApp(App)

app.use(router);
app.use(store);
app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);

app.mount('#app');

