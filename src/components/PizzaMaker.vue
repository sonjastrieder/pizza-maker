<template>
  <form @submit.prevent>
    <OrderInputs />
    <div>
      <OrderDetails />
      <div>
        <button type="submit" @click="submit">Order now</button>
        <button @click="reset">Reset</button>
      </div>
    </div>
  </form>
  <div>
    {{ selection }}
  </div>
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
