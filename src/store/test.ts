import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestStore = defineStore("test", {
  state: () => ({
    obj: {
      a: 1,
      b: 2,
    },
  }),
  actions: {
    updated() {
      this.obj = { a: 8, b: 9 };
    },
  },
});
