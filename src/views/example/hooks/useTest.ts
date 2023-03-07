import { ref, watch, Ref } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/store/useCounterStore";

export const useTest = (): { num: Ref<number>; addNum: Function } => {
  const num = ref<number>(1);

  const addNum = () => {
    num.value += 1;
  };

  watch(num, (val) => console.log("useTest", val));

  const store = useCounterStore();
  const { count } = storeToRefs(store);

  watch(count, () => console.log("store test", count));

  return {
    num,
    addNum,
  };
};
