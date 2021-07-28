import { ref, reactive, toRefs, computed } from "vue";
import { cloneDeep } from "@/common/cloneDeep";

const state = reactive({
  toppings: [],
  sizes: [],
  crusts: [],
  preset: {},
  selection: {
    size: "",
    toppings: [],
    crust: "",
  },
});

const fetchData = async () => {
  try {
    const response = await import(`../data/index.js`);
    const config = response.default;

    await new Promise((resolve) => {
      setTimeout(resolve, 200);
    });

    state.toppings = config.toppings;
    state.sizes = config.sizes;
    state.crusts = config.crusts;
    state.selection = cloneDeep(config.default);
    state.preset = cloneDeep(config.default);
  } catch (error) {
    console.log("Error", error);
  }
};

const status = ref(fetchData());

// Toppings - with adjusted price based on size selection

const toppings = computed(() => {
  const size = state.sizes.find((size) => size.id === state.selection.size);

  return state.toppings.map((topping) => ({
    ...topping,
    price: topping.price * size.toppingMultiplier,
  }));
});

// Summary - order selection summary and total price

const summary = computed(() => {
  const size = state.sizes.find((size) => size.id === state.selection.size) || {};
  const crust = state.crusts.find((crust) => crust.id === state.selection.crust) || {};

  let toppingsTotal = 0;

  const toppingsSummary = state.selection.toppings.map((id) => {
    const topping = toppings.value.find((topping) => topping.id === id);
    const price = topping.price;

    toppingsTotal += price;

    return {
      id: topping.id,
      name: topping.name,
      price: price,
    };
  });

  const basePrice = size.price || 0;
  const total = basePrice + toppingsTotal;

  return {
    size: size,
    crust: crust,
    basePrice: basePrice,
    toppings: toppingsSummary,
    total: total,
  };
});

const actions = {
  selectToppings: (toppings) => {
    state.selection.toppings = toppings;
  },
  selectSize: (size) => {
    state.selection.size = size;
  },
  selectCrust: (crust) => {
    state.selection.crust = crust;
  },
  reset: () => {
    state.selection.size = state.preset.size;
    state.selection.crust = state.preset.crust;
    state.selection.toppings = [...state.preset.toppings];
  },
};

export default {
  ...toRefs(state),
  status,
  toppings,
  summary,
  ...actions,
};
