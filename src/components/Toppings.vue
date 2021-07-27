<template>
  <fieldset>
    <legend class="u-typeLabel">Toppings</legend>
    <div v-for="topping in options" :key="topping.id" class="form-check">
      <label class="form-check-label">
        <input
          class="form-check-input"
          :checked="selected.includes(topping.id)"
          type="checkbox"
          name="topping"
          :value="topping.id"
          @change="handleChange"
        />
        {{ topping.name }}</label
      >
    </div>
  </fieldset>
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
