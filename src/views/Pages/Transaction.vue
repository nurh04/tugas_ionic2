<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Transaksi</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Transaksi</ion-title>
          </ion-toolbar>
        </ion-header>
  
       <ion-card>
        <ion-card-content>
          <ion-input label="Nama Pelanggan" label-placement="floating" fill="solid"
              placeholder="Nama Pelanggan"></ion-input>

          <ion-input label="Keterangan" label-placement="floating" fill="solid"
              placeholder="Masukkan Keterangan"></ion-input>
        </ion-card-content>
       </ion-card>


      </ion-content>
  
      <ion-footer>
        <ion-button color="danger" expand="block" fill="solid" shape="round">
          Simpan
        </ion-button>
      </ion-footer>
    </ion-page>
  </template>
  
  <script setup lang="ts">

  
  </script>
  