import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App).use(store).use(router);
app.config.errorHandler = (err) => {
    console.log('error occurred', err);
};
app.mount('#app');
