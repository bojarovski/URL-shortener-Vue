import { defineStore } from "pinia";
import Repository from "../../repositories/RepositoryFactory";

const AuthenticationRepository = Repository.get("authentication");

export const useCounterStore = defineStore("Url", {
  state: () => ({
    urls: "mario",
  }),
  actions: {
    increment() {
      console.log(this.urls);
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
