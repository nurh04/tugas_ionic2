<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Riwayat Transaksi</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Riwayat Transaksi</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <ion-item>
          <ion-icon name="pizza" slot="start"></ion-icon>
          <ion-label>
            <h2>No Transaksi</h2>
            <P>tanggal</p>
            <p>jam</p>
          </ion-label>
        </ion-item>

      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  </script>
  