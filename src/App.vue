<template>
  <Suspense>
    <template #default>
      <PizzaMaker />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import PizzaMaker from "./components/PizzaMaker.vue";

export default {
  components: {
    PizzaMaker,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
