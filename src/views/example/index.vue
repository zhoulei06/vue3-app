<template>
  <div>The block is example page</div>
  <div>count: {{ count }}</div>
  <div>{{ num }}</div>
  <div>
    <span>store</span>
    <span>--</span>
    <span>{{ storeCount }}</span>
  </div>
  <el-button type="primary" @click="star">star</el-button>
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import { storeToRefs } from "pinia";
import { useCounterStore } from "@/store/useCounterStore";
import { useTest } from "./hooks/useTest";
import { useWatch } from "./hooks/useWatch";

const store = useCounterStore();
const { count: storeCount } = storeToRefs(store);
const { increment } = store;

const count = ref<number>(123);
const text = computed(() => count.value + 100);
const { num, addNum } = useTest();
useWatch();
const star = () => {
  addNum();
  increment();
  count.value++;
  ElMessage({
    message: "test",
    type: "success",
  });
};
watch(text, (val) => console.log("computed - text", val));
</script>

<style scoped lang="scss">
.read-the-docs {
  width: 100px;
  height: 100px;
  padding: 10px;
  color: #000;
}
.text-tiele {
  width: 100px;
}
</style>
