<template>
  <div>
    <select @change="handleChange">
      <option v-for="crust in options" :key="crust.id" :value="crust.id" :selected="crust.id === selected">
        {{ crust.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: { type: Array, default: () => [] },
    selected: { type: String, default: "" },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const handleChange = (event) => {
      const id = event.target.value;

      emit("change", id);
    };
    return {
      handleChange,
    };
  },
};
</script>
