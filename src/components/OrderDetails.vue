<template>
  <div class="OrderDetails">
    <div>
      <div class="OrderDetails-base">
        <span class="u-typeH3">
          {{ summary.size.name }} pizza
          <span class="OrderDetails-size">{{ summary.size.size }}"</span>
        </span>
        <div class="OrderDetails-lineItem">
          <span>{{ summary.crust.name }}</span>
          {{ formatPrice(summary.basePrice) }}
        </div>
      </div>
      <ul v-if="summary.toppings" class="OrderDetails-lineItems" role="list">
        <li v-for="topping in summary.toppings" :key="topping.id" class="OrderDetails-lineItem">
          <span>{{ topping.name }}</span> <span>{{ formatPrice(topping.price) }}</span>
        </li>
      </ul>
    </div>
    <strong class="OrderDetails-total"
      ><span class="u-visuallyHidden">Total</span>
      <span class="u-typeH3">{{ formatPrice(summary.total) }}</span></strong
    >
  </div>
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

<style lang="scss" scoped>
$_offset: 1rem;

.OrderDetails {
  &-base {
    margin-bottom: 1rem;
  }

  &-lineItem,
  &-total {
    margin-left: $_offset;
  }

  &-lineItem {
    display: flex;
    justify-content: space-between;
  }

  &-lineItems {
    margin-bottom: 0.5rem;

    > :first-child {
      padding-top: 0.5rem;
      border-top: 1px solid $c-keyline;
    }
  }

  &-total {
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
    border-top: 1px solid $c-keyline;
  }

  &-size {
    text-align: right;
    display: inline-block;
  }
}
</style>
