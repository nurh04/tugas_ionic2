import Axios from "axios";
import { token } from "./user";
import { watch } from "vue";


export const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 10000,
});


//Set default headers for all request
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common["Authorization"] = "Bearer" + token.value;

// Watch for changes in TokenStorage and update the Authorization header accordingly
watch(token, (newVal) => {
    axios.defaults.headers.common["Authorization"] = "Bearer" + token.value;
    console.log({ "New token": "bearer" + token.value })
});