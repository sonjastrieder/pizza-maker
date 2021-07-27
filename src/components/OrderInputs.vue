<template>
  <div class="OrderInputs u-box">
    <Sizes class="OrderInputs-group" :options="sizes" :selected="selection.size" @change="selectSize" />
    <Crust class="OrderInputs-group" :options="crusts" :selected="selection.crust" @change="selectCrust" />
    <Toppings class="OrderInputs-group" :options="toppings" :selected="selection.toppings" @change="selectToppings" />
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
    const { status, sizes, crusts, toppings, selection, selectToppings, selectSize, selectCrust } =
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

<style lang="scss" scoped>
.OrderInputs {
  & &-group {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
