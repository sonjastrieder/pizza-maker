import { reactive, toRefs, computed } from "vue";

const state = reactive({
  toppings: [],
  sizes: [],
  crusts: [],
  defaultSize: null,
  selection: {
    size: "",
    toppings: [],
    crust: "9f79668e-90f2-462d-bc96-69a11b1d939b",
  },
});

const total = computed(() => {
  return 12;
});

export default function usePizza() {
  const load = async () => {
    try {
      const response = await import(`../data/index.js`);

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      state.toppings = response.default.toppings;
      state.sizes = response.default.sizes;
      state.crusts = response.default.crusts;
      state.defaultSize = state.sizes.find((size) => size.id === response.default.defaultSize) || null;
    } catch (error) {
      console.log("Error", error);
    }
  };

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
  };

  return {
    ...toRefs(state),
    load,
    total,
    ...actions,
  };
}
