<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  will-change: filter;
  padding: 1.5em;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
