import { ref, watch, Ref } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/store/useCounterStore";

export const useWatch = () => {
  const store = useCounterStore();
  const { count } = storeToRefs(store);

  watch(count, () => console.log("use watch", count.value));
};
