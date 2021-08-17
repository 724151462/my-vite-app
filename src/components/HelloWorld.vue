<template>
  <h1>{{ msg }}</h1>
  <van-button @click="test">aaa</van-button>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import vueRouter from "@/router";
import { reactive, getCurrentInstance, defineComponent } from "vue";

// export default defineComponent({
//   setup(props, context) {
defineProps({
  msg: String,
});
const state = reactive({ count: 0 });
const test = () => {
  vueRouter.push("/test");
};
// return {
//   test,
//   state,
// };
//   },
// });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
