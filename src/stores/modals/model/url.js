import { defineStore } from "pinia";
import _axios from "@/plugins/axios";
import Repository from "../../repositories/RepositoryFactory";

const UrlRepository = Repository.get("url");

export const urlModal = defineStore("Url", {
  state: () => ({
    urls: [],
  }),
  actions: {
    async takeUrls() {
      this.urls = await UrlRepository.getUrls();
    },
  },
  getters: {
    getUrls: (state) => state.urls,
  },
});
