<template>
  <div>
    <div v-for="topping in options" :key="topping.id">
      <label>
        <input v-model="selection" type="checkbox" name="topping" :value="topping.id" />
        {{ topping.name }}: {{ topping.price }}</label
      >
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  name: "Toppings",
  props: {
    selected: { type: Array, default: () => [] },
    options: { type: Object, default: () => {} },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const selection = ref(props.selected || []);

    watchEffect(() => emit("change", selection.value));

    return { selection };
  },
};
</script>
