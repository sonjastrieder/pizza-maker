<template>
  <form>
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
  </form>
  <OrderDetails />
  <div>
    {{ selection }}
  </div>
</template>

<script>
import usePizza from "../store/pizza";
import Toppings from "./Toppings.vue";
import Sizes from "./Sizes.vue";
import Crust from "./Crust.vue";
import OrderDetails from "./OrderDetails.vue";

export default {
  components: { Toppings, Sizes, Crust, OrderDetails },
  async setup() {
    const { sizes, crusts, toppings, selection, selectToppings, selectSize, selectCrust, load } = usePizza();

    await load();

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
