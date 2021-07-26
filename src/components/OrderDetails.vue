<template>
  <div>{{ summary.base.label }} {{ summary.base.price }}</div>
  <div v-if="summary.toppings">
    <div v-for="topping in summary.toppings" :key="topping.id">{{ topping.name }} {{ topping.price }}</div>
  </div>
  <strong>Total {{ summary.total }}</strong>
</template>

<script>
import { inject } from "vue";
import { PIZZA_STORE_KEY } from "@/common/constants";

export default {
  setup() {
    const { summary } = inject(PIZZA_STORE_KEY);

    return { summary };
  },
};
</script>
