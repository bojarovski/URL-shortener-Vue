<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h2 font-weight-bold">List Urls</h1>
      </div>

      <v-row>
        <v-col v-for="(url, index) in urls" :key="index">
          <v-card
            append-icon="mdi-open-in-new"
            class="mx-auto"
            @click="cardClick(index)"
            max-width="344"
            prepend-icon="mdi-web"
            rel="noopener"
            subtitle="Check out the official repository"
            target="_blank"
            :title="url.short_url"
          >
            {{}}
            <!-- Assuming 'url' is the property containing URL -->
          </v-card>
        </v-col>
      </v-row>
      <div class="py-4" />
    </v-responsive>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import { urlModal } from "../stores/modals/model/url";

const store = urlModal();

onMounted(() => {
  store.takeUrls();
});

const urls = computed(() => {
  return store.getUrls;
});

const cardClick = () => {
  // Passing the index to setUrls if needed
  console.log("Clicked card index:", index);
};
</script>
