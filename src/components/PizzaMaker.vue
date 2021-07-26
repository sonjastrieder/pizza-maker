<template>
  <form @submit.prevent>
    <div>
      Sizes
      <Sizes :options="sizes" :selected="selection.size" @change="selectSize" />
    </div>
    <div>
      Crusts
      <Crust :options="crusts" :selected="selection.crust" @change="selectCrust" />
    </div>
    <div>
      Toppings
      <Toppings :options="toppings" :selected="selection.toppings" @change="selectToppings" />
    </div>
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
import Toppings from "./Toppings.vue";
import Sizes from "./Sizes.vue";
import Crust from "./Crust.vue";
import OrderDetails from "./OrderDetails.vue";

export default {
  components: { Toppings, Sizes, Crust, OrderDetails },
  async setup() {
    const { status, sizes, crusts, toppings, selection, selectToppings, selectSize, selectCrust, reset } =
      inject(PIZZA_STORE_KEY);

    await status.value;

    const submit = () => {
      console.log("submit");
    };

    return {
      sizes,
      crusts,
      toppings,
      selection,
      selectSize,
      selectToppings,
      selectCrust,
      reset,
      submit,
    };
  },
};
</script>

<style scoped>
div {
  margin-bottom: 2rem;
}
</style>
