<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Login</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <ion-card>
          <ion-card-header>
            <ion-card-title class="text-center">Login</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-input v-model="email" label="Email" label-placement="floating" fill="solid"
                placeholder="Masukkan Email"></ion-input>
            <ion-input v-model="password" label="Password" label-placement="floating" fill="solid"
                placeholder="Masukkan Password"></ion-input>

            <div class="text-center">
              <ion-button @click="login" size="default">Masuk</ion-button>
            </div>
          </ion-card-content>
        </ion-card>

      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { axios } from "../../services/axios";
  import { token, user, TUser } from "../..services/user";

  const email = ref('jamal@gmail.com')
  const password = ref('jamal1233')

  const login = () => {

    axios.post('login', {
      email: email.value,
      password: password.value,
    }).then(result => {

      const data = result.data?.value
      const mess = result.data.mess
      const isError = result.data.isError

      if(isError) {
        return
      }

      user.value = data
      token.value = result.data?.token
      console.log(user.value)


    }).catch(error => {
      console.log(error)
    })

  }
  
  </script>
  <style></style>
  