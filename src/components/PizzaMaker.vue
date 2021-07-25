<template>
  <div>
    Sizes
    <div class="range">
      <input v-model="selectedSizeIndex" type="range" min="0" :max="sizes.length - 1" step="1" list="number" />
      <datalist id="number">
        <option v-for="size in sizes" :key="size.id">{{ size.size }}</option>
      </datalist>
    </div>
  </div>
  <div>
    Crusts
    <select>
      <option v-for="crust in crusts" :key="crust.id">{{ crust.name }}: {{ crust.price }}</option>
    </select>
  </div>
  <div>
    Toppings
    <div v-for="topping in toppings" :key="topping.id">
      <label> <input type="checkbox" name="topping" /> {{ topping.name }}: {{ topping.price }}</label>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import usePizza from "../store/pizza";

export default {
  async setup() {
    const { sizes, crusts, toppings, defaultSize, load } = usePizza();

    await load();

    const defaultSizeIndex = computed(() => {
      const defaultSizeId = defaultSize.value.id;

      return sizes.value.findIndex((size) => size.id === defaultSizeId);
    });

    const selectedSizeIndex = ref(defaultSizeIndex.value);

    return {
      sizes,
      crusts,
      toppings,
      selectedSizeIndex,
    };
  },
};
</script>

<style scoped>
.range input {
  width: 100%;
}

.range datalist {
  display: flex;
  justify-content: space-between;
  height: auto;
  overflow: hidden;
}
</style>
