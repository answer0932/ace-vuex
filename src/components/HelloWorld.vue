<template>
  <h1>{{ msg }}</h1>

  <button @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";
import { useVuexStore } from "../hooks";
// import { State } from '../store';
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    // const { state, getters } = useStore<State>();
    const { state, getters } = useVuexStore();
    console.log("state: ", state.user.loading);
    console.log("state: ", getters["user/isLogin"]);
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
