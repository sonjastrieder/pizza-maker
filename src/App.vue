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
import { provide } from "vue";
import { PIZZA_STORE_KEY } from "@/common/constants";
import pizzaStore from "@/store/pizza";
import PizzaMaker from "@/components/PizzaMaker.vue";

export default {
  components: {
    PizzaMaker,
  },
  setup() {
    provide(PIZZA_STORE_KEY, pizzaStore);
  },
};
</script>
