<template>
  <div>{{ summary.base.label }} {{ summary.base.price }}</div>
  <div v-if="summary.toppings">
    <div v-for="topping in summary.toppings" :key="topping.id">{{ topping.name }} {{ topping.price }}</div>
  </div>
  <strong>Total {{ summary.total }}</strong>
</template>

<script>
import usePizza from "../store/pizza";

export default {
  setup() {
    const { summary } = usePizza();

    return { summary };
  },
};
</script>
