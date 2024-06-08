<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <v-alert
      color="success"
      icon="mdi-check-circle"
      title="Alert title"
      class="absolute-alert"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione
      debitis quis est labore voluptatibus...
    </v-alert>

    <AppFooter />
  </v-app>
</template>

<script setup>
//
</script>
<style>
.absolute-alert {
  position: absolute;
  top: 20px; /* Position it above the footer */
  right: 1px;
  transform: translateX(-10%);
  width: 400px; /* Adjust as needed */
  z-index: 9999; /* Ensure it appears above other content */
}
</style>
