<template>
  <div>The block is index page</div>
  <div>{{ count }}</div>
  <div>{{ count }}</div>
  <el-button type="primary" @click="star">star</el-button>
  <div @click="toExample">toExample</div>
  <textTsx></textTsx>
  <textTsx2 :str="str"></textTsx2>
  <App></App>
</template>

<script setup lang="ts">
import { useTestStore } from "@/store/test";
import textTsx from "./components/text-tsx";
import { textTsx2, App } from "./components/text-tsx2";

const store = useTestStore();

const a = ref(0);
const str = ref(1);
const obj = ref({ name: 1, info: { age: 1 } });

const router = useRouter();
const count = ref<number>(123);

const star = () => {
  a.value++;
  str.value = 778899;
  // count.value++;
  // store.updated();
};
const toExample = () => {
  router.push("/example");
};

console.log(obj, isReactive(obj.value.info), a.value, isReactive(a.value), a);
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
