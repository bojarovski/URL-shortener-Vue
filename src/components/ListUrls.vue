<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h2 font-weight-bold">List Urls</h1>
      </div>
      <v-row>
        <v-col v-for="(url, index) in urls" :key="index">
          <v-card
            class="mx-auto"
            @click="cardClick(url.short_url)"
            max-width="344"
            prepend-icon="mdi-web"
            rel="noopener"
            subtitle="Link Short Name"
            target="_blank"
            :title="url.short_url"
          >
            <!-- Assuming 'url' is the property containing URL -->
          </v-card>
        </v-col>
      </v-row>
      <div class="py-4" />
      <div class="pa-4 text-center">
        <v-dialog v-model="dialog" max-width="600">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              class="text-none font-weight-regular"
              prepend-icon="mdi-plus"
              text="ADD URL"
              variant="tonal"
              :rules="urlRules"
              v-bind="activatorProps"
            ></v-btn>
          </template>

          <v-card prepend-icon="mdi-web" title="ADD URL">
            <v-card-text>
              <v-row dense>
                <v-col>
                  <v-text-field
                    label="Insert URL*"
                    required
                    v-model="urlInput"
                    :rules="urlRules"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="Close"
                variant="plain"
                @click="dialog = false"
              ></v-btn>

              <v-btn
                color="primary"
                text="Save"
                variant="tonal"
                @click="submitForm"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { computed, ref } from "vue";
import { urlModal } from "../stores/modals/model/url";

const store = urlModal();
const dialog = ref(false);
const urlInput = ref("");
const urlRules = [
  (value) => !!value || "URL is required",
  (value) => {
    const pattern = /^(https?|ftp):\/\/(-\.)?([^\s/?.#-]+\.?)+(\/[^\s]*)?$/i;
    return pattern.test(value) || "Invalid URL";
  },
];

onMounted(() => {
  store.takeUrls();
});

const urls = computed(() => {
  return store.getUrls;
});

const url = computed(() => {
  return store.getUrl;
});

watch(url, (newUrl) => {
  window.open(newUrl);
});

const cardClick = (index) => {
  store.takeUrl(index);
};

const submitForm = () => {
  dialog.value = false;
  let body = {
    original_url: urlInput.value,
  };
  store.storeUrl(body);
};
</script>
