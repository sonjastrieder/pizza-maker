import { reactive, toRefs } from "vue";

const state = reactive({
  toppings: [],
  sizes: [],
  crusts: [],
  defaultSize: null,
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

  return {
    ...toRefs(state),
    load,
  };
}
