<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h2 font-weight-bold">List Urls</h1>
      </div>

      <v-row column="2">
        <v-col>
          <v-card
            append-icon="mdi-open-in-new"
            class="mx-auto"
            @click="cardClick(1)"
            max-width="344"
            prepend-icon="mdi-github"
            rel="noopener"
            subtitle="Check out the official repository"
            target="_blank"
            title="Vuetify on GitHub"
          ></v-card>
        </v-col>
      </v-row>

      <div class="py-4" />
    </v-responsive>
  </v-container>
</template>

<script setup>
const store = useCounterStore();
const cardClick = (id) => {
  store.randomizeCounter();
  console.log("adsasdadsads", id);
};
</script>
