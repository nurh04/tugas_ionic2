<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Barang</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Barang</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>

        <ion-item v-for="item in data" lines="full" class="ion-activatable ripple-parent">
          <ion-label>
            <h2>{{ item?.name }}</h2>
            <p>{{ item?.price }}</p>
          </ion-label>
          <ion-ripple-effect></ion-ripple-effect>
        </ion-item>

      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { axios } from "../services/axios";
import { onMounted, ref } from "vue";

const data = ref<any[]>([])


onMounted(() => {
  axios.get('stuffs')
      .then(result => {
        const isError = result.data.isError
        const value = result.data.value

        data.value = value
      }).catch(error => {

      }).finally(() => {

      })

})

</script>
