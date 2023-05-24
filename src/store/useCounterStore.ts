import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const arr = ref([1, 2, 3]);
  function increment() {
    count.value++;
  }

  function test() {
    arr.value = [66, 77, 88];
  }

  return { count, arr, increment, test };
});
