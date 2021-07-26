<template>
  <div>{{ summary.base.label }} {{ formatPrice(summary.base.price) }}</div>
  <div v-if="summary.toppings">
    <div v-for="topping in summary.toppings" :key="topping.id">{{ topping.name }} {{ formatPrice(topping.price) }}</div>
  </div>
  <strong>Total {{ formatPrice(summary.total) }}</strong>
</template>

<script>
import { inject } from "vue";
import { PIZZA_STORE_KEY } from "@/common/constants";

export default {
  setup() {
    const { summary } = inject(PIZZA_STORE_KEY);

    const formatPrice = (number) => {
      return new Intl.NumberFormat(undefined, { style: "currency", currency: "EUR" }).format(number);
    };

    return { summary, formatPrice };
  },
};
</script>
