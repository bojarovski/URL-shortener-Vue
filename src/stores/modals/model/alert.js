import { defineStore } from "pinia";

export const alertModal = defineStore("Alert", {
  state: () => ({
    showAlert: "",
  }),
  actions: {
    async showHideAlert(item) {
      this.showAlert = item;
    },
  },
  getters: {
    showAlert: (state) => state.showAlert,
  },

  created() {
    eventBus.on("updateAlert", this.actions);
  },
});
