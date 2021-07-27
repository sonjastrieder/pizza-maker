<template>
  <div>
    <Sizes :options="sizes" :selected="selection.size" @change="selectSize" />
    <Crust :options="crusts" :selected="selection.crust" @change="selectCrust" />
    <Toppings :options="toppings" :selected="selection.toppings" @change="selectToppings" />
  </div>
</template>

<script>
import { inject } from "vue";
import { PIZZA_STORE_KEY } from "@/common/constants";
import Toppings from "./Toppings.vue";
import Sizes from "./Sizes.vue";
import Crust from "./Crust.vue";

export default {
  components: { Toppings, Sizes, Crust },
  async setup() {
    const { status, sizes, crusts, toppings, selection, selectToppings, selectSize, selectCrust, reset } =
      inject(PIZZA_STORE_KEY);

    await status.value;

    return {
      sizes,
      crusts,
      toppings,
      selection,
      selectSize,
      selectToppings,
      selectCrust,
    };
  },
};
</script>

<style scoped>
div {
  margin-bottom: 2rem;
}
</style>
