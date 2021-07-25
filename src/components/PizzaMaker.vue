<template>
  <form>
    <div>
      Sizes
      <Sizes :options="sizes" :selected="size" @change="selectSize" />
    </div>
    <div>
      Crusts
      <Crust :options="crusts" :selected="crust" @change="selectCrust" />
    </div>
    <div>
      Toppings
      <Toppings :options="toppings" :selected="selection.toppings" @change="selectToppings" />
    </div>
  </form>
  <div>
    {{ selection }}
  </div>
</template>

<script>
import { computed } from "vue";
import usePizza from "../store/pizza";
import Toppings from "./Toppings.vue";
import Sizes from "./Sizes.vue";
import Crust from "./Crust.vue";

export default {
  components: { Toppings, Sizes, Crust },
  async setup() {
    const { sizes, crusts, toppings, defaultSize, selection, selectToppings, selectSize, selectCrust, load } =
      usePizza();

    // Load pizza options

    await load();

    const size = computed(() => {
      return selection.value.size || defaultSize.value.id;
    });

    const crust = computed(() => {
      return selection.value.crust || crusts.value[0].id;
    });

    return {
      sizes,
      size,
      crusts,
      crust,
      toppings,
      selection,
      selectSize,
      selectToppings,
      selectCrust,
    };
  },
};
</script>
