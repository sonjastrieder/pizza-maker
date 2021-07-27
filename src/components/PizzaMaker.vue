<template>
  <form class="PizzaMaker" @submit.prevent>
    <OrderInputs />
    <div class="u-box">
      <OrderDetails />
      <div class="PizzaMaker-ctrls">
        <button class="PizzaMaker-btn btn btn-link" @click="reset">Reset</button>
        <button class="PizzaMaker-btn btn btn-primary" type="submit" @click="submit">Order now</button>
      </div>
    </div>
  </form>
</template>

<script>
import { inject } from "vue";
import { PIZZA_STORE_KEY } from "@/common/constants";

import OrderInputs from "./OrderInputs.vue";
import OrderDetails from "./OrderDetails.vue";

export default {
  components: { OrderInputs, OrderDetails },
  async setup() {
    const { status, reset, selection } = inject(PIZZA_STORE_KEY);

    await status.value;

    const submit = () => {
      console.log("submit");
    };

    return {
      reset,
      submit,
      selection,
    };
  },
};
</script>

<style lang="scss" scoped>
.PizzaMaker {
  &-ctrls {
    display: flex;
    justify-content: flex-end;
  }

  &-btn {
    & + & {
      margin-left: 0.5rem;
    }
  }
}
</style>
