<template>
  <fieldset class="Toppings">
    <legend class="u-typeLabel">Toppings</legend>
    <div class="Toppings-options">
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

<style lang="scss" scoped>
$_labelSpacer: 0.25rem;
$_gutter: 0.5rem;

.Toppings {
  &-options {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -$_labelSpacer;

    // Increase checkbox clickarea

    :deep(.form-check-label) {
      display: inline-block;
      padding-top: $_labelSpacer;
      padding-bottom: $_labelSpacer;
    }

    > div {
      flex: 0 0 50%;
    }
  }
}
</style>
