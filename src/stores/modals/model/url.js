import { defineStore } from "pinia";
import _axios from "@/plugins/axios";
import Repository from "../../repositories/RepositoryFactory";

const UrlRepository = Repository.get("url");

export const urlModal = defineStore("Url", {
  state: () => ({
    urls: [],
    url: null,
  }),
  actions: {
    async takeUrls() {
      this.urls = await UrlRepository.getUrls();
    },
    async takeUrl(id) {
      this.url = await UrlRepository.getUrl(id);
    },
    async storeUrl(body) {
      this.url = await UrlRepository.storeUrl(body);
    },
  },
  getters: {
    getUrls: (state) => state.urls,
    getUrl: (state) => state.url,
  },
});
