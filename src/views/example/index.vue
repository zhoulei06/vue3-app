<template>
  <div>The block is example page</div>
  <div>count: {{ count }}</div>
  <div>{{ num }}</div>
  <div>
    <span>store</span>
    <span>--</span>
    <span>{{ storeCount }}</span>
    <span>ref{{ c }}</span>
  </div>
  <el-button type="primary" @click="star">star</el-button>
  <HelloWorld></HelloWorld>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { useCounterStore } from "@/store/useCounterStore";
import { useTest } from "./hooks/useTest";
import { useWatch } from "./hooks/useWatch";

const store = useCounterStore();
const { count: storeCount, arr } = storeToRefs(store);
const { increment, test } = store;

const count = ref<number>(123);
const obj = ref({
  a: { b: "hah" },
  c: 1,
});

const { c } = toRefs(obj.value);
c.value++;

console.log(obj, obj.value.a, obj.value.c);

const text = computed(() => count.value + 100);
const { num, addNum } = useTest();
useWatch();
const star = () => {
  storeCount.value++;
  // c.value++;
  // addNum();
  // increment();
  // test();
  // count.value++;
  // ElMessage({
  //   message: "test",
  //   type: "success",
  // });
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
