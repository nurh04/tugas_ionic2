import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Import Global CSS */
import './theme/global.css';

import { axios } from "./services/axios";
import { token, user } from "./services/user";

import * as VueQrcodeReader from 'vue-qrcode-reader'

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  .use(VueQrcodeReader)
 
axios.get('auth')
  .then(result => {

    const data = result.data?.value
    const mess = result.data.mess
    const isError = result.data.isError

    if(isError) {
      user.value = null
      token.value = ''
      return
    }

    user.value = data
    //console.log(user.value)

    }).catch(error => {

    }).finally(() => {

      router.isReady().then() => {
        app.mount('#app');
      });

    })