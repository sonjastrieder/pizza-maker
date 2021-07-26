<template>
  <div>
    <div v-for="topping in options" :key="topping.id">
      <label>
        <input
          :checked="selected.includes(topping.id)"
          type="checkbox"
          name="topping"
          :value="topping.id"
          @change="handleChange"
        />
        {{ topping.name }}</label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Toppings",
  props: {
    selected: { type: Array, default: () => [] },
    options: { type: Object, default: () => {} },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const handleChange = (event) => {
      const target = event.target;

      if (target.checked) {
        emit("change", [...props.selected, target.value]);
      } else {
        emit(
          "change",
          props.selected.filter((value) => value !== target.value),
        );
      }
    };

    return { handleChange };
  },
};
</script>
