<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Akun</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Akun</ion-title>
        </ion-toolbar>
      </ion-header>

        <div class="text-center mx-auto">
          <ion-label color="light">
            <h2>Maichael</h2>
            <h2>Maichael.gmail.com</h2>
            
          </ion-label>
        </div>
        
         <ion-ripple-effect></ion-ripple-effect>
      </div>

      <div class="menu">
        <ion-item lines="full" class="ion-activatable ripple-parent">
          <ion-icon :icon="personCircleOutline" slot="end"></ion-icon>
          <ion-label class="">
            <h2>Lihat Akun</h2>
            <p>Buka Halaman akun lebih detail</p>
          </ion-label>
          <ion-ripple-effect></ion-ripple-effect>
        </ion-item>

        <ion-item lines="full" class="ion-activatable ripple-parent">
          <ion-icon :icon="logOut" slot="end"></ion-icon>
          <ion-label>
            <h2>Keluar Akun</h2>
            <p>Keluar dari Akun yang sekarang</p>
          </ion-label>
          <ion-ripple-effect></ion-ripple-effect>
        </ion-item>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { personCircleOutline, logOut } from "ionicons/icons";
</script>

<style>
.head {
  background-color: red;
  padding: 40px 10px;
}

</style>