<template>
  <div>The block is index page</div>
  <div>{{ count }}</div>
  <div>{{ count }}</div>
  <div @click="star">star</div>
  <div @click="toExample">toExample</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const count = ref<number>(123);

const star = () => {
  count.value++;
};
const toExample = () => {
  router.push("/example");
};
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
