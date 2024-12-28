import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from './App.vue';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(VueQueryPlugin);
app.mount('#app');

// src/stores/counter.ts (Example Pinia store)
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
    },
});
