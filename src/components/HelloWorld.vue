<script setup lang="ts">
import { ref } from "vue";
interface PersonType {
  name: string | number;
  age: number;
  msg: string;
}
const props = withDefaults(defineProps<PersonType>(), {
  name: "哈哈",
  age: 18,
  msg: "你好啊",
});

const count = ref<number>(0);
</script>

<template>
  <h1>{{ props.msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>哈哈/components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div>{{ props.name }}</div>
</template>

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
