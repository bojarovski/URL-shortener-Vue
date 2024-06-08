<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <v-alert
      v-if="alertShow"
      color="success"
      icon="mdi-check-circle"
      :title="alertShow"
      class="absolute-alert"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus...
    </v-alert>

    <AppFooter />
  </v-app>
</template>

<script setup>
import { alertModal } from "../stores/modals/model/alert";
const store = alertModal();

const alertShow = computed(() => {
  return store.getUrls;
});

watch(alertShow, () => {
  store.showHideAlert(false);
});
</script>
<style>
.absolute-alert {
  position: absolute;
  bottom: 80%; /* Position it above the footer */
  left: 60%;
  /* transform: translateX(-50%); */
  width: 35%; /* Adjust as needed */
  z-index: 9999; /* Ensure it appears above other content */
}
</style>
