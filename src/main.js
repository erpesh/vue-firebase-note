import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/main.css'
import { getAuth } from "firebase/auth";

const auth = getAuth()
const app = createApp(App)
app.use(router)
app.provide("auth", auth);
app.mount('#app')
